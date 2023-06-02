import React from 'react'
import Header from '../Components/Header.js';
import '../css/main_container.css';
import { useState } from 'react';

import fish_img from '../Images/fish_img.webp'

import fish1 from '../Images/fish1.webp'
import fishMain from '../Images/fish_main2.jpg';
import Typewriter from 'typewriter-effect';



// import Footer from '../Components/Footer.js';
function MainContainer() {


    const [display1, changeStyleForSlider] = useState("block");
    const [display2, changeStyleForSlider1] = useState("none");
    const [display3, changeStyleForSlider2] = useState("none");

    const [count, setcount] = useState(0);

    const onChangeSlider = () => {


        setcount(count + 1)



        if (count == 0) {
            changeStyleForSlider1("block")
            changeStyleForSlider2("none")
            changeStyleForSlider("none")
        }
        else if (count == 1) {
            changeStyleForSlider1("none")
            changeStyleForSlider("none")

            changeStyleForSlider2("block")
        }
        else {
            changeStyleForSlider1("none")
            changeStyleForSlider2("none")

            changeStyleForSlider("block")
        }

    }

    return (

        < div >


            <div className='Conatiner' >

                <Header />
                <div className='frontContainer'>


                    {/* <div className='image_container'> */}
                    {/* <div className='img_animate' style={{ backgroundImage: `url(${fishMain})`, height: "100%", width: "100%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>  </div> */}

                </div>


                {/* <div style={{ backgroundImage: `url(${fishMain})`, height: "100%", width: "100%", backgroundSize: "contain", backgroundRepeat: "no-repeat" }}>  </div> */}
                {/* </div> */}


                {/* <div className='textContainer'> */}


                {/* <div className='textDiv'> */}
                {/* <div className="waviy">
                                <span style={{ color: "rgb(225 217 212)", textShadow: "2px 2px #d96d13c2", fontSize: "40px" }}>Aquarium</span>
                            </div> */}
                {/* <div className="content">
                                <h2>Aquarium</h2>
                                <h2>Aquarium</h2>
                            </div>
                            <p>An aquarium is really just a spaceship for fish</p>
                            <p>Aquarium fish make us realize how beautiful silence is</p>
                            <p>I think life's a bit of what you make it and </p>
                            <p>a little smidgen of you being the jellyfish,
                            </p>
                            <p>and the tide's just gently helping you along.</p>
                        </div> */}


                {/* </div> */}
                {/* <div className="content">
                    <h2>Aquarium</h2>
                    <h2>Aquarium</h2>
                </div> */}
                {/* <h1 >AQUARIUM</h1> */}
                <div style={{ position: "absolute", top: "33%", marginLeft: "30%", fontSize: "90px", color: "white" }} className="wrapper three">
                    <div>
                        <h3>AQUARIUM</h3>
                    </div>

                </div>
                <div className='smallFish'></div>
                <div className='smallFish1'></div>
                <div className='card_text'>

                    <Typewriter
                        options={{

                            autoStart: true,
                            loop: true,
                        }}
                        onInit={(typewriter) => {
                            typewriter.pauseFor(1000)
                                .typeString('<h1 style="color: #ffff; font: normal normal 600 20px Poppins";>An aquarium is really just </h1>')


                                .typeString('<h1 style="color:#399d9b ;font: normal normal 600 20px Poppins";>a spaceship for fish... </h1>')
                                //.typeString('<h1 style="color:#ffff;font: normal normal 600 50px/30px Poppins";>...<span style="color:black">|</span></h1>')

                                // .deleteAll()
                                .typeString('<h1 style="color:#ffff;font: normal normal 600 20px Poppins";>Aquarium fish make us realize <h1>')
                                .typeString('<h1 style="color:#ffff;font: normal normal 600 20px Poppins";> how <span style="color:#399d9b ;font: normal normal 600 20px Poppins";>beautiful </span> silence is<h1>')
                                .typeString('<h1 style="color: #ffff; font: normal normal 600 20px Poppins";>a little smidgen of you being the jellyfish</h1>')
                                .deleteAll()
                                // .typeString('<h1 style="color: #ffff; font: normal normal 600 30px Poppins";>Curated meals that</h1>')
                                // .typeString('<h1 style="color: #ffff; font: normal normal 600 30px Poppins";>fits in all pocket</h1>')
                                // .typeString('<h1 style="color:#399d9b ;font: normal normal 600 30px Poppins";>coming soon...</h1>')
                                .start();

                        }}
                    />
                </div>
                <div className='card_text'></div>

                <div className="wrapper">
                    <ul className="bg-bubbles">
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                        <li />
                    </ul>
                </div>




                <div className='main_card_container'>

                    <div className='description_card'>

                        <div className='description_card_div'>
                            <div className='description_card1'>

                                <div className='description_card_img'>
                                    <div className='img1'>

                                    </div>
                                    {/* <div style={{ backgroundImage: `url(${fish1})`, height: "100%",borderRadius:"50%", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}></div> */}
                                </div>
                                <div className='description_card_text'>

                                </div>
                            </div>
                            <div className='description_card1'>
                                <div className='description_card_img'>
                                    <div className='img1'>

                                    </div>
                                </div>
                                <div className='description_card_text'>

                                </div>
                            </div>
                            <div className='description_card1'>
                                <div className='description_card_img'>
                                    <div className='img1'>

                                    </div>
                                </div>
                                <div className='description_card_text'>

                                </div>
                            </div>
                            <div className='description_card1'>
                                <div className='description_card_img'>
                                    <div className='img1'>

                                    </div>
                                </div>
                                <div className='description_card_text'>

                                </div>
                            </div>
                            {/* <div style={{ backgroundImage: `url(${fish1})`, height: "100%", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}></div> */}

                        </div>





                    </div>

                    <div className='card_container'>

                        <div className='card'>

                        </div>
                        <div className='card'>

                        </div>
                        <div className='card'>

                        </div>
                        <div className='card'>

                        </div>

                    </div>
                </div>
            </div>





            {/* <Footer /> */}
            {/* <div onClick={onChangeSlider}>Pre</div>
            <div className='Conatiner'>



                <div className='slider1' style={{ display: display1 }}>
                    1
                </div>
                <div className='slider2' style={{ display: display2 }}>
                    2
                </div>
                <div className='slider3' style={{ display: display3 }}>
                    3
                </div>
                <div>Next</div>
            </div> */}




        </div >
    )
}

export default MainContainer