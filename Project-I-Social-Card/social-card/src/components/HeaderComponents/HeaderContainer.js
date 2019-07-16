import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

const HeaderContainer = () => {
    return (
        <header className="header-container">
            <div className="image-container">
                <ImageThumbnail />
            </div>
            <div className="content-container">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    )
}

export default HeaderContainer