import React from 'react'
import './topbar.css'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo">Green</span>
                <span className="logo2">Mart</span>
            </div>
            <div className='topRight'>
                <div className='topBarIconsContainer'>
                    <NotificationsNoneOutlinedIcon />
                    <span className='topIconBadge'>2</span>
                </div>

                <div className='topBarIconsContainer'>
                    <LanguageOutlinedIcon />
                    <span className='topIconBadge'>2</span>
                </div>
                <div className='topBarIconsContainer'>
                    <SettingsOutlinedIcon />
                </div>
                <img src="https://images.pexels.com/photos/1427889/pexels-photo-1427889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="proPic" className="topAvatar" />
                
            </div>
        </div>
    </div>
  )
}
