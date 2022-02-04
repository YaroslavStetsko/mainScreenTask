import React from 'react';
import '../css/index.css';
import CustomTinyImg from '../components/CustomTinyImg';

const Header = ():JSX.Element => {
 
  return (
    <header>
     <div className="main-info">
       <img src="/Assets/Button.Logo.Back.svg" alt="logo" />
       <span>Company name</span> 
       <CustomTinyImg   
       url = '/Assets/Icons-ic_play_arrow.svg'
       alt = 'play icon'
       /> 
     </div>
     <div className="user-info">
     <img src="/Assets/icon.helpInfo.svg" alt="help icon" />
     <span>Help & Support</span> 
     <CustomTinyImg   
       url = '/Assets/Icons-ic_play_arrow.svg'
       alt = 'play icon'
       /> 
     <div className="user-info__activities">
       <div className="user-info__activities-logo-section">
         <img src="/Assets/icon.activity.svg" alt="activity logo"/>
         <img className='red-dot' src="/Assets//Ellipse 2886.svg" alt="eclipse logo" />
       </div>   
       <div className='user-info__activities--avatar-section'>
         <img src="/Assets/navigation Profile.svg" alt="user logo"  />
         </div> 
     </div>
     </div>
    </header>
  )
}

export default Header;

