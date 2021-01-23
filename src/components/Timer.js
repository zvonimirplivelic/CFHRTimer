import React from 'react'

let timer = (props) => {

    let setTimerMinutes = () => {
        return Math.floor(props.workTime / 60)
    }

    let setTimerSeconds = () => {
        let seconds = props.workTime % 60
        if (seconds < 10) {
            seconds = '0' + seconds
        }
        return seconds
    }

    return (
        <div className="Timer">
            {setTimerMinutes()} : {setTimerSeconds()}
        </div>
    )
}

export default timer