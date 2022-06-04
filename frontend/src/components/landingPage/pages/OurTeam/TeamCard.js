import React from 'react'
import ProfileCard from '../../ProfileCard'
function TeamCard() {
    return (
        <div className = 'container' style = {{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '20px'}}>
            <ProfileCard name = 'Fraol Dechasa' title = 'Software engineer' />
            <ProfileCard name = 'Yabsira Lemma' title = 'Software engineer' />
            <ProfileCard name = 'Gideon Kassa' title = 'I dont know what he does; nither do I' />
        </div>  
    )
}

export default TeamCard
