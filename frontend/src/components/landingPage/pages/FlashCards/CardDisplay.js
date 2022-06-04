import React from 'react'
import CardFlip from '../../CardFlip'
import './CardDisplay.css'
import { ObjectOne, ObjectTwo } from './Data'

function CardDisplay() {
    return (
        <>
            <div className='OuterContainer'>
                {/* <div className='CardDisplay-container'> */}
                <div>
                    <CardFlip {...ObjectOne} />

                </div>
                <div>
                    <CardFlip {...ObjectTwo} />
                </div>
                {/* </div> */}
            </div>
            <h2 className='container' style={{ display: 'flex', justifyContent: 'center', marginTop: '45px' }}>Our Team</h2>
        </>
    )
}

export default CardDisplay
