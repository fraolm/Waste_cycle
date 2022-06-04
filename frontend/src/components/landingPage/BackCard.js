import React from 'react'
import './css/BackCard.css'

const BackCard = ({children,onClick}) => {
    return (
        <div className = 'backCard-container' onClick = {onClick}>
            <p className = 'backCard-description'>{children}</p>
        </div>
    )
}

export default BackCard
