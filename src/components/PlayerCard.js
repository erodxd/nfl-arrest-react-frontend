import React, { Fragment } from 'react'

export class PlayerCard extends React.Component {

    state = {
        clicked: false
    }

    toggleDetails = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        //console.log(this.props)
        return (
            <div onClick={this.toggleDetails} className='ui card'>
               {this.state.clicked ?
                <Fragment>
                    <p>{this.props.arrestDate}</p>
                    <h1>{this.props.category}</h1>
                    <h4>{this.props.description}</h4>
               </Fragment> 
               :
               <Fragment>
                    <h1>{this.props.name}</h1>
                    <h2>Team:  {this.props.team}</h2>
                    <h2>City:  {this.props.teamCity}</h2>
                    <span>Position:  {this.props.position}</span>
               </Fragment>
               }
            </div>
        )
    }
}

export default PlayerCard
