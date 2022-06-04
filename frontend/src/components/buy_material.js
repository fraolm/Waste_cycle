import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import { useHistory} from 'react-router-dom';
import axios from 'axios';
import clsx from 'clsx';
import { Divider } from '@material-ui/core';
import Estimator from './estimator_payment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 170,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3)
  },
}));

export default function VerticalLinearStepper() {

  const [state, setState] = React.useState({
    washed: false,
    WashedAndShredded: false,
    NotProcessed: false
  });

  const [state2, setState2] = React.useState({
    cash: false,
    online: false
  });
  
  const [addplasticCase0, setAddplasticCase0] = React.useState();
  const [addweightCase1, setAddweightCase1] = React.useState({vals : '0'})
  var methodselectedCase2 = Object.keys(state).find(key => state[key] === true)

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const history = useHistory();

  const sendpost = async () => {
    await axios.get('/theuserss')
    .then((response)=> {
        const resp = response.data[response.data.length - 1].id;
        send(resp)
      })
    }

  const send = async (resp) => {
    await axios({
    method: 'post',
    url: '/userpost',
    data: {body:{user_id:resp, plastic:addplasticCase0, weight:addweightCase1, method:methodselectedCase2}},
  })
  .then(history.push('/'))

}
  const handleChange1 = (event) => {
    setAddweightCase1(event.target.value);
  };

  const handleChange = (event) => {
    if (event.target.checked === true) {
      setState({
        washed: true,
        WashedAndShredded: false,
        NotProcessed: false
      });
    } else {
      setState({ ...state, [event.target.name]: event.target.checked });
    }
  };

  const handleChangeb = (event) => {
    if (event.target.checked === true) {
      setState({
        washed: false,
        WashedAndShredded: true,
        NotProcessed: false
      });
    } else {
      setState({ ...state, [event.target.name]: event.target.checked });
    }
  };

  const handleChangec = (event) => {
    if (event.target.checked === true) {
      setState({
        washed: false,
        WashedAndShredded: false,
        NotProcessed: true
      });
    } else {
      setState({ ...state, [event.target.name]: event.target.checked });
    }
  };

  const handleChanged = (event) => {
    if (event.target.checked === true) {
      setState2({
        cash: true,
        online: false
      });
    } else {
      setState2({ ...state, [event.target.name]: event.target.checked });
    }
  };

  const handleChangee = (event) => {
    if (event.target.checked === true) {
      setState2({
        cash: false,
        online: true,
      });
    } else {
      setState2({ ...state, [event.target.name]: event.target.checked });
    }
  };

  function getSteps() {
    return ['Type of material', 'Amount of material', 'Condition of material'];
  }
  
  function GetStepContent(step) {

    switch (step) {
      case 0:
        return ('What material are you looking for',
  
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Type of material</InputLabel>
        <Select
          labelId="dl"
          id="dt"
          //multiple
          value={addplasticCase0}
          onChange={(e) => {
            setAddplasticCase0(e.target.value)
          }}
        >
          <MenuItem value={'PET'}>PET</MenuItem>
          <MenuItem value={'HDPE'}>HDPE</MenuItem>
          <MenuItem value={'LDPE'}>LDPE</MenuItem>
          <MenuItem value={'All'}>All types of plastic</MenuItem>
        </Select>
      </FormControl>);

  
      case 1:
        return ('How much material do you need', 
            <TextField
            label="Amount"
            type="number"
            value={addweightCase1}
            size='medium'      
            onChange={handleChange1}
            className={clsx(classes.margin, classes.textField)}
            InputProps={{
              startAdornment: <InputAdornment position="start">Kg</InputAdornment>
            }}
          />
        );
      case 2:
        return ('Do you want the material to be',
        
      <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.washed}
            onChange={handleChange}
            color='primary'
            name="washed"
          />
        }
        label="Washed"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.WashedAndShredded}
            onChange={handleChangeb}
            color='primary'
            name="WashedAndShredded"
          />
        }
        label="Washed and Shredded"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.NotProcessed}
            onChange={handleChangec}
            color='primary'
            name="NotProcessed"
          />
        }
        label="Not Processed"
      />
    </FormGroup>)
      default:
        return 'Unknown step';
    }
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    
  };
  
  const final = () => {
    if (state2.cash === true) {
      return (
        <div>
          <Button color='primary' variant='contained' onClick={handleReset} className={classes.button}>
            Back to start
          </Button>
          <Button color='primary' variant='contained' onClick={sendpost} className={classes.button}>
            Submit
          </Button>
        </div>
      )
    } 
    if (state2.online === true) {
      return (
        <div>
          <Button color='primary' variant='contained' onClick={handleReset} className={classes.button}>
            Back to start
          </Button>
          <Button color='primary' variant='contained' onClick={sendpost} className={classes.button}>
            Submit
          </Button>
        </div>
      )
    }
  }

  const estimator = Estimator(addweightCase1)
  
  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{GetStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
      <div className='CardItemContainer'>
      <div className='CardItems1'>
          <div className='CardStructure'>
              <span className='CardProductName'>Payment</span>
          </div>
          <Typography align='left' variant='h6'>Your order total is : </Typography>
          <Divider></Divider>
          <Typography align='left' variant='h6'>How would you like to make your payment</Typography>

          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={state2.cash}
                  onChange={handleChanged}
                  name="cash"
                  color='primary'
                />
              }
              label="Cash"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={state2.online}
                  disabled
                  color='primary'
                  onChange={handleChangee}
                  name="online"
                />
              }
              label="Online"
            />
          </FormGroup>
          {final()}

          <p className='CardLine'></p>
          <div className='CardWeight'> 
          
          {/* <Typography align='center'>You are set! Submit your request and we will notify you once it is filled.</Typography> */}
          {estimator}
        </div>
        </div>
        </div>
      )}
    </div>
  );
}
