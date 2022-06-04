import Button from './Button'
const Landing_page = () => {
    return (
        <div className = 'landing-container'>
        <div style = {{marginLeft: '25px'}}>
            <p style = {{fontSize:'24px', fontWeight: 'bold'}}>Connection for manufacturers <br/>
               and waste collectors</p>
            <p style = {{marginTop: '0px'}}>Waste Connect is a platform that bridges the gap <br/> between manufacturers and waste 
collectors.</p>
        <Button/>
        </div>
        

        </div>
    )
}

export default Landing_page
