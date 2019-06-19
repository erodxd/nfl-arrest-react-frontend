import React from 'react'

const SortBar = (props) => {

    const handleChange = (event) => {
        if (event.target.value === "position") {
            props.sortPlayerPosition()
        } else if (event.target.value === "team") {
          props.sortByTeam()
        } else if (event.target.value === "city") {
          props.sortByCity()
        }
    }

    return (
        <div className="field">
        <p className="control">
          <span className="select">
            <select onChange={handleChange}>
              <option>Select dropdown</option>
              <option value="position">Sort by Player Position</option>
              <option value="team">Sort by Team</option>
              <option value="city">Sort by City</option>
            </select>
          </span>
        </p>
      </div>
    )
}

export default SortBar
