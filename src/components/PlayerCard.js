import React, { Fragment } from 'react'

export class PlayerCard extends React.Component {

    state = {
        clicked: false
    }

    render() {
        return (
            <div className='ui card'>
               <Fragment>
                   <h1>{this.props.name}</h1>
               </Fragment> 
            </div>
        )
    }
}

export default PlayerCard
