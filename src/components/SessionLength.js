import React, { Component } from 'react'

function SessionLength(props) {
    return (
        <section>
            <button>Down</button>
            <p>{props.sessionLength}</p>
            <button>Up</button>
        </section>
    )
}
export default SessionLength