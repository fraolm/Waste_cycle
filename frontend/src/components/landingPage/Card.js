import React from 'react'
import './css/Card.css'
import {} from 'react-icons/gr'
import {MonetizationOn} from '@material-ui/icons'

function Card({children, onClick, param}) {
    const renderSwitch = (param)=>{
        switch (param){
            case 'Monitorization':
                return <MonetizationOn fontSize = 'large' style = {{height: '100%', width: '100%'}} />;
            default:
                return;
        }
    }

    return (
    <div className ='container-card' onClick = {onClick}>
        <div className = 'title-container'>
            <div>{children}</div>
        </div>
        <div className = 'card-img'>
            {renderSwitch(param)}
        </div>
        
    </div>
    )
}

export default Card
