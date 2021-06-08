import React, { Component } from 'react'

function SessionLength(props) {
    return (
        <section>
            <h4>  Session Length</h4>
            <section className="interval-cotainer">
                <button>Down</button>
                <p>{props.sessionLength}</p>
                <button>Up</button>
            </section>
        </section>

    )
}
export default SessionLength