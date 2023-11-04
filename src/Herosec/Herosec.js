import React, { Fragment, useEffect, useRef } from 'react'
import style from './Herosec.module.css';
import heroSectionImage from '../Images/manish patra 1.png'
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { motion } from 'framer-motion';
import gsap from 'gsap';
// import img1 from '../Images/pexels-angela-roma-7319297.jpg'
// import img2 from '../Images/pexels-henry-&-co-2736834.jpg'
// import img3 from '../Images/pexels-adrien-olichon-2387793 (1).jpg'

// const imageUrls = [
//     img1,
//     img2,
//     img3,
// ];


export function Herosec() {
    const navigateToContact = useNavigate();

    function handleNaviToContact() {
        navigateToContact('/contact')
    }

    const h1Ref = useRef(null);

    useEffect(() => {
        const text = h1Ref.current.textContent;
        const letters = text.split('');

        h1Ref.current.textContent = '';

        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.display = 'inline-block';
            h1Ref.current.appendChild(span);

            gsap.from(span, {
                duration: 0.3,
                opacity: 0,
                y: 20,
                delay: index * 0.1,
            });
        });
    }, []);


    // const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // useEffect(() => {
    //     const imageChangeTimer = setInterval(() => {
    //         setCurrentImageIndex((prevIndex) =>
    //             (prevIndex + 1) % imageUrls.length
    //         );
    //     }, 2000);

    //     return () => {
    //         clearInterval(imageChangeTimer);
    //     };
    // }, []);

    const firstPAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 5,
            },
        },
    };

    const secondPAnimation = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 4,
            },
        },
    };


    return (
        <Fragment>
            <div className={style.main_h}>
                <div id={style.main_herosec} className={style.main_herosection}
                // style={{
                //     backgroundImage: `url(${imageUrls[currentImageIndex]})`,
                //     width: '100%',
                //     backgroundSize: 'cover',
                //     backgroundPosition:'center'
                // }}
                >
                    <div className={style.sub_herosection}>
                        <div className={style.secondary_herosec}>
                            <motion.p
                                variants={firstPAnimation}
                                initial="hidden"
                                animate="visible"
                            >Hi , I am Manish Kumar Patra</motion.p>
                            <h1 ref={h1Ref}>Frontend Developer</h1>
                            <motion.p
                                variants={secondPAnimation}
                                initial="hidden"
                                animate="visible"

                            >I enjoy researching and developing new technologies, designing website with animations from different platforms. I believe that learning is a never-ending process,and I am very into new technologies which trends in web development.</motion.p>
                        </div>
                        <button onClick={handleNaviToContact} className={style.btn1}>Get In Touch <ArrowForwardIosIcon /></button>
                    </div>
                    <div className={style.hero_sec_img}>
                        <img src={heroSectionImage} alt="" />
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
