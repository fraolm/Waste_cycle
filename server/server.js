const DiscoveryV2 = require('ibm-watson/discovery/v1');
const { IamAuthenticator } = require('ibm-watson/auth');
require('dotenv').config();
if (!process.env.WATSON_DISCOVERY_APIKEY || !process.env.WATSON_DISCOVERY_URL) {
  console.error(
    'Please provide the DISCOVERY_API_KEY and DISCOVERY_URL environment variables to run the app.'
  );
  process.exit(1);
}
const discoveryurl = process.env.WATSON_DISCOVERY_URL;
const discoveryapi = process.env.WATSON_DISCOVERY_APIKEY;
const discovery = new DiscoveryV2({  
    authenticator: new IamAuthenticator({
      apikey: discoveryapi
    }),
    url: discoveryurl,
    version: '2019-11-22'
  });
  const fastify = require('fastify')({
    logger: true
  })
fastify.post('/l', async (request, reply) => {
  console.log('///////////////////////////////////////////////////////////////////////////////',JSON.stringify(request.body.body.query));
  const queryParams = {
    version: '2018-12-03',
    environmentId: 'system',
    collectionId: 'news-en',
    naturalLanguageQuery: request.body.body.query,
    count: 10
  };
  discovery.query(queryParams)
    .then(queryResponse => {
    reply.send(queryResponse.result.results);
    })
    .catch(err => {
    console.log('error:', err);
    })   
});

const IBMCloudEnv = require('ibm-cloud-env');
IBMCloudEnv.init('/server/config/mappings.json');

const CloudantSDK = require('@cloudant/cloudant');
const cloudant = new CloudantSDK(IBMCloudEnv.getString('cloudant_url'));

// create mydb database if it does not already exist
cloudant.db.create('mydb')
  .then(data => {
    console.log('mydb database created');
  })
  .catch(error => {
    if (error.error === 'file_exists') {
      console.log('mydb database already exists');
    } else {
      console.log('Error occurred when creating mydb database', error.error);
    }
  });

cloudant.db.create('postsdb')
  .then(data => {
    console.log('postsdb database created');
  })
  .catch(error => {
    if (error.error === 'file_exists') {
      console.log('postsdb database already exists');
    } else {
      console.log('Error occurred when creating postsdb database', error.error);
    }
  });
  
const mydb = cloudant.db.use('mydb');
fastify.post('/signup', async (request, reply) => {
    const name = {
    name: request.body.body.name,
    lastname: request.body.body.lastname,
    email: request.body.body.email,
    password: request.body.body.password
  };
  mydb.insert(name)
});

fastify.get('/signin', async (request, reply) => {
everything = mydb.list({include_docs: true})
return everything
});

const postsdb = cloudant.db.use('postsdb');
fastify.post('/userpost', async (request, reply) => {
  const posts = {
  user_id: request.body.body.user_id,
  plastic: request.body.body.plastic,
  weight: request.body.body.weight,
  method: request.body.body.method
};
postsdb.insert(posts)
});

fastify.get('/seeposts', async (request, reply) => {
  everything = postsdb.list({include_docs: true})
  return everything
  });

const theUser = [{id:'null', date:'null'}]
fastify.post('/theuser', async (request, reply) => {
  const posts = {
  id: request.body.body.id,
  date: request.body.body.date};
theUser.push(posts)
});

fastify.get('/theuserss', async (request, reply) => {
  everything = theUser
  return everything
  });

const start = async () => {
  try {
    await fastify.listen(3000)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()