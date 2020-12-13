import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import './Footer.scss';

export default function Footer() {

    return (
      <div className='footer'>
        <div className='links'>
        <p className="list_subTitle">Privacy Policy</p>   
        <p className="list_subTitle">Terms & Conditions</p>
        <p className="list_subTitle">Contact us</p>
        <p className="list_subTitle">About</p>   
        </div>
        <div className='socialMedia'>
           <p className="follow_us">Follow us:</p>
           <p className="follow_us"><Facebook /></p>
           <p className="follow_us"><Twitter /></p>
           <p className="follow_us"><Instagram /></p>
        </div>
        <span>© 2020 Mobile World, All rights resrved. </span>
      </div>
    );
}

