import React from 'react'
import Header from '../Components/Header.js';
import '../css/main_container.css';
import { useState } from 'react';

import fish_img from '../Images/fish_img.webp'

import fish1 from '../Images/fish1.webp'

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

            <Header />
            <div className='Conatiner'>

                {/* <div style={{ backgroundImage: `url(${fish_img})`, height: "100px", width: "100px" }}>  </div> */}


                <div className='image_container'>


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