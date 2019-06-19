import React from 'react'
import PlayerCard from '../components/PlayerCard'

function PlayerContainer(props) {
    console.log(props)

    const filteredPlayers = props.players.filter(player => player.name.includes(props.filter))

    return (
        <div className="ui cards">
            {props.players.map(player => 
                <PlayerCard name={player.name}
                players={filteredPlayers}
                teamCity={player.team_city} 
                team={player.team}
                position={player.position}
                arrestDate={player.arrests.map(arrestDetails => 
                arrestDetails.date)}
                category={player.arrests.map(arrestDetails =>
                arrestDetails.category)}
                description={player.arrests.map(arrestDetails =>
                arrestDetails.description)}    
                />
            )}
        </div>
    )
}

export default PlayerContainer

