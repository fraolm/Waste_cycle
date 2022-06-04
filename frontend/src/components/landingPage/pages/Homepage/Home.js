import React from 'react'
import HomeSection from '../../HomeSection'
import { homeObjOne, homeObjTwo } from './Data'

function Home() {
    return (
        <>
           <HomeSection {... homeObjOne} />
           <HomeSection {... homeObjTwo} />

        </>
    )
}

export default Home
