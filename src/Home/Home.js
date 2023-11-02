import React, { Fragment } from 'react'
import transition from '../Transition'
import { Herosec } from '../Herosec/Herosec'

function home() {
    return (
        <Fragment>
            <Herosec />
        </Fragment>
    )
}

export default transition(home)
