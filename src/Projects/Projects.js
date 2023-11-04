import React, { Fragment } from 'react'
import transition from '../Transition'
import styles from './Projects.module.css'

function projects() {
    return (
        <Fragment>
            <div className={styles.main_projects}>
                <h1>Projects</h1>
            </div>
        </Fragment>
    )
}
export default transition(projects)




