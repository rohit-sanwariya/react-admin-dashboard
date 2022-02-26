 import './Topbar.css'
 import User from '../../img/user1.jpg'
 import {  NotificationsActive,Settings,Language,Menu } from '@mui/icons-material';

export const Topbar = ({toggleSidebar}) => {
     
    
    
  return (
    <nav className='navbar nav'>
        <div className="nav-container">
            <div className="nav-left">
                <Menu onClick={toggleSidebar} className='menu-icon'/>
                <span className="logo">
                    RHT ADMIN
                </span>
            </div>
            <div className="nav-right">
                <div className="nav-icons-container">
                    <Language/>
                </div>
                <div className="nav-icons-container">
                    <NotificationsActive/>
                    <span className="notification-icon-badge">2</span>

                </div>
                <div className="nav-icons-container">
                    <Settings/>
                </div>
                <img className='user-avatar'    src={User} alt="" />
            </div>
        </div>
    </nav>
  )
}
