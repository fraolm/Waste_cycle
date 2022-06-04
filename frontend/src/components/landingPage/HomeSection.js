import React from 'react'
import Button from './Button'
import './css/HomeSection.css'

import { useHistory } from 'react-router-dom';

function HomeSection({description, imgStart, headline, buttonLabel, img, alt, vis, underline, bg_container, hideCool}) {
    const linkhistory = useHistory();
    const links = async () => {
        
        linkhistory.push('/signup')
      }
    return (
        <>
            <div className = {underline ? 'home--bg': 'home-top'}>
                <div className = {`container ${bg_container}`}>
                        <div className = 'row home--hero-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse': 'row' }}>
                            <div className ='col'>
                            <div className = { underline ? 'home_hero-text-wrapper': 'home_hero-text-wrapper ourMission'}>
                                <h1 style = {{cursor: 'default'}}  className = {underline ?'heading':'header-modify'}><div className={underline ? 'underline':'underline-disable'}></div>{headline} </h1>
                                <p style = {{cursor: 'default'}}  className = {underline ?'home_hero-subtitle': 'home_hero-subtitle-modified'}>{description}</p>
                                <div hidden = {hideCool} >
                                    <Button color = 'primary' onclick={() => {links()}}> Get Started </Button>
                                </div>
                            </div>
                        </div>

                            <div className = 'col'>
                                <div className = 'home__hero-img-wrapper'>
                                    <img src = {img} alt = {alt} className = 'home__hero-img'></img>
                                </div>
                            </div>
                </div>
            </div>
        </div>

</>

    )   
}

export default HomeSection
