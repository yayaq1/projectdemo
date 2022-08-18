import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className='topMiddle'>
                <span className="logo"><b>TheNodeTeam</b></span>
                    <span className="arrowIcon"><KeyboardDoubleArrowLeftIcon/></span>
                </div>
                <div className="topLeft">
                < input type="text" placeholder="Search...."/>
                   
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsIcon />
                        <span className="topIconBadge">1</span>
                    </div>
                    <div className="topbarIconContainer">
                        <AccountCircleIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}
