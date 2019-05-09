import React from 'react';
import './Header.css';

const HeaderTitle = () => {
    return (
        <div className="title-container">
            <p className="first">Lambda School</p>
            <p className="second">
              <span className="@user">@LambdaSchool</span>{` `}&bull;{` `}
              <span className="date">26 Jan</span>  
            </p>
        </div>
    )
}

export default HeaderTitle