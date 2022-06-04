import React from 'react'
import './css/ProfileCard.css'
import testImg from './images/Linkedin.jpg'
import {Avatar} from 'antd'
import 'antd/dist/antd.css'

function ProfileCard({name, title, parm}) {

    return (
        <div className = 'profileCard-container'>
            <div className = 'profileCard-img-container'>
                <div className = 'profileCard-img'>
                    <Avatar size = {150} src = {testImg} />
                </div>
            </div>

            <div className = 'profilecard-descr-container'>
                <h3>{name}</h3>
                <div>{title}</div>
            </div>
            
        </div>
    )
}

export default ProfileCard
