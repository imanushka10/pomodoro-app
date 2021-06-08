import React, { Component } from 'react'

export class Timer extends Component {
    constructor() {
        super()

        this.state = {
            isSession: true,
            timerSecond: 0
        }
    }
    render() {
        return (
            <section>
                <section>
                    <h4>{this.props.isSession === true ? "Session" : "Break"}</h4>
                    <span>{this.props.timerMinute}</span>
                    <span></span>
                    <span>{this.state.timerSecond === 0 ? "00"
                        : this.state.timerSecond < 10 ? "0" + this.state.timerSecond
                            : this.state.timerSecond}</span>
                </section>
            </section>
        )
    }
}

export default Timer
