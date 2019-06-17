import React from 'react'
import PlayerCard from '../components/PlayerCard'

function PlayerContainer(props) {
    return (
        <div className="ui cards">
            {props.players.map(player => 
                <PlayerCard name={player.name}
                team_name={player.team_name}
                position={player.position}
                arrest_count={player.arrest_count} />
            )}
        </div>
    )
}

export default PlayerContainer

