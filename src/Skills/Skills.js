import React, { Fragment } from 'react'
import transition from '../Transition'
import style from './Skills.module.css'

function skills() {
    return (
        <Fragment>
            <div className={style.main_skills_add}>
                <h1>Skills</h1>
            </div>
        </Fragment>
    )
}
export default transition(skills)