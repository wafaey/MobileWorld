import React from 'react';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import RestoreIcon from '@material-ui/icons/Restore';
import './Features.scss'

export default function Features() {
	return (
            <div className='main'>
              <div className='part'>
               <LocalShippingIcon fontSize={"large"}/>
                <h3>Free Shipping</h3> 
                <p>Sick of paying for shipping on your online shopping?
                     Check out our guide to free shipping offers and find out how you can save money.</p>
              </div>
              <div className='part'>
              <RestoreIcon fontSize={"large"}/>
              <h3>30 Days Return Policy</h3> 
              <p>Change of mind returns. You may return most new and unopened items within 30 days of delivery for a full refund of the price you paid.</p>
              </div>
              <div className='part'>
               <MonetizationOnIcon fontSize={"large"}/>
               <h3>Secured Payment</h3>  
               <p>We guarantee a secure connection with several methods of payment provided for you to make your purchase with peace of mind.</p>
              </div>
            </div>
	)
}

