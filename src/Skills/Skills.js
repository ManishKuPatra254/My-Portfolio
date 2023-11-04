import React, { Fragment } from 'react'
import transition from '../Transition'
import style from './Skills.module.css'
import htmllogo from '../Images/png-transparent-html5-icon-•-html-social-network-icon 1.png'
import csslogo from '../Images/png-transparent-html5-icon-•-css-social-network-icon 1.png'
import jslogo from '../Images/png-transparent-html5-icon-•-js-social-network-icon 1.png'
import reactjslogo from '../Images/png-transparent-html5-icon-•-react-social-network-icon 1.png'
import bootstraplogo from '../Images/png-transparent-html5-icon-•-boot-social-network-icon 1.png'
import figmalogo from '../Images/png-transparent-html5-icon-•-figma-social-network-icon 1.png'
import muilogo from '../Images/png-transparent-html5-icon-•-mui-social-network-icon 1.png'
import gitlogo from '../Images/png-transparent-html5-icon-•-git-social-network-icon 1.png'
import gitlablogo from '../Images/png-transparent-html5-icon-•-gitlab-social-network-icon 1.png'

function skills() {
    return (
        <Fragment>
            <div className={style.main_skills_add}>
                <h1>Skills</h1>
                <section className={style.services_container}>
                    <div className={style.row}>
                        <div className={style.item}>
                            <img src={htmllogo} alt="" />
                            <h2>HTML</h2>
                        </div>

                        <div className={style.item}>
                            <img src={csslogo} alt="" />
                            <h2>CSS</h2>
                        </div>

                        <div className={style.item}>
                            <img src={jslogo} alt="" />
                            <h2>Javascript</h2>
                        </div>

                        <div className={style.item}>
                            <img src={reactjslogo} alt="" />
                            <h2>React Js</h2>
                        </div>

                        <div className={style.item}>
                            <img src={bootstraplogo} alt="" />
                            <h2>Bootstrap</h2>
                        </div>

                        <div className={style.item}>
                            <img src={figmalogo} alt="" />
                            <h2>Figma</h2>
                        </div>

                        <div className={style.item}>
                            <img src={muilogo} alt="" />
                            <h2>Material UI</h2>
                        </div>

                        <div className={style.item}>
                            <img src={gitlogo} alt="" />
                            <h2>Github</h2>
                        </div>
                        <div className={style.item}>
                            <img src={gitlablogo} alt="" />
                            <h2>Git</h2>
                        </div>
                    </div>
                </section>
            </div>
        </Fragment>
    )
}
export default transition(skills)