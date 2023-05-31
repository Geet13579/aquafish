import React from 'react';
import '../css/header.css';
import { useEffect, useState, useRef } from 'react';
import menu from '../Images/menu.svg'
import { hover } from '@testing-library/user-event/dist/hover';

function Header() {
  const [width, setWidth] = useState(window.innerWidth)

  const [isMobile, setIsMobile] = useState(false)



  useEffect(() => {
    window.addEventListener("resize", () => {

      setWidth(window.innerWidth)
    });

    console.log(window.innerWidth)


  });

  const openPopupmenu = () => {
    setIsMobile(true)
  }
  const closePopupmenu = () => {
    setIsMobile(false)
  }




  return (

    <div>

      {isMobile == true ?

        <div className='popuMenu'>
          <div onClick={closePopupmenu} className="closeButton" >close</div>

        </div>
        : <div></div>}

      <div className='Header_Main'>
        <div className='leftnavbar'>

          <div className='logo'>

          </div>



        </div>

        {width <= 457 ? <div className='rightnavbar' style={{ justifyContent: "flex-end", marginRight: "30px" }}>
          <div ><img onClick={openPopupmenu} src={menu} className="menuStyle" /></div>


        </div>

          :
          <div className='rightnavbar'>
            <div className='right_menu'>
              <a href='#/' className="hover_style">
                Home
              </a>


            </div>




            <div className='right_menu'>
              <a href='#/' className="hover_style">
                About
              </a>




            </div>
            <div className='right_menu'>
              <a href='#/' className="hover_style">
                Service

              </a>



            </div>
            <div className='right_menu'>
              <a href='#/' className="hover_style">
                Gallary
              </a>




            </div>
            <div className='right_menu'>
              <a href='#/' className="hover_style">
                Contact

              </a>



            </div>
          </div>
        }


      </div>


    </div>


  )
}

export default Header
