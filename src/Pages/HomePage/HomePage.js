import React, { useState, useEffect } from 'react';
import HomeImageContainer from './Home_Components/HomeImageContainer'
import Features from './Home_Components/Features'
import BestSellers from './Home_Components/BestSellers'
import './HomePage.scss';

export default function HomePage() {
	return (
            <div>
            <HomeImageContainer />
            <Features />
            <BestSellers />
            </div>
	)
}

