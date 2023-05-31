import React from 'react';
import '../css/header.css';
import { useEffect,useState } from 'react';

function Header() {


  return (
    <div>
      <div className='Header_Main'>
        <div className='leftnavbar'>

          <div className='logo'>

          </div>



        </div>
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


      </div>

    </div>
  )
}

export default Header
