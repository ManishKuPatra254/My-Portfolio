import React, { Fragment } from 'react'
import transition from '../Transition'
import style from './About.module.css'
function about() {
    return (
        <Fragment>
            <div className={style.main_about_p}>
                <h1>About</h1>
            </div>
        </Fragment>
    )
}

export default transition(about)
