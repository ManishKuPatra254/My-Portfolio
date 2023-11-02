import React, { Fragment } from 'react'
import style from './Herosec.module.css';
import heroSectionImage from '../Images/manish patra 1.png'
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export function Herosec() {
    const navigateToContact = useNavigate();

    function handleNaviToContact() {
        navigateToContact('/contact')
    }
    return (
        <Fragment>
            <section id={style.main_herosec} className={style.main_herosection} >
                <div className={style.sub_herosection}>
                    <div className={style.secondary_herosec}>
                        <p>Hi , I am Manish Kumar Patra</p>
                        <h1>Frontend Developer</h1>
                        <p>I enjoy researching and developing new technologies, designing website with animations from different platforms. I believe that learning is a never-ending process, and I am very into new technologies which trends in web development.</p>
                    </div>
                    <button onClick={handleNaviToContact} className={style.btn1}>Get In Touch <ArrowForwardIosIcon /></button>
                </div>
                <div className={style.hero_sec_img}>
                    <img src={heroSectionImage} alt="" />
                </div>
            </section>
        </Fragment>
    )
}
