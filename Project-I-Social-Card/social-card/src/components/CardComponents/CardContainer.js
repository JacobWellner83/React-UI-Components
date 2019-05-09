import React from 'react';
import './Card.css';

import CardBanner from './CardBanner'
import CardContent from './CardContent'

const CardContainer = () => {
    return (
        <div className="card-wrap">
            <div className="banner-container">
                <CardBanner />
            </div>
            <div className="card-content-container">
                <CardContent />
            </div>
        </div>
    )
}

export default CardContainer