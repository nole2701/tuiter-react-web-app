import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setNav } from "../reducers/navigation-reducer";
// import NavigationItem from "./navigation-item";
/* eslint-disable jsx-a11y/anchor-is-valid */

const NavigationSidebar = () => {
  // const NavigationTabs = ['Home', 'Explore', 'Notifications', 'Messages', 'Bookmarks', 'Lists', 'Profile', 'More']

  const active = useSelector(state => state.nav);
  const dispatch = useDispatch();
  const handleNavClick = () => {
    dispatch(setNav("Home"))
  };
  const handleNavClick2 = () => {
    dispatch(setNav("Explore"))
  };

 return (
   <div className="list-group">
     <div className="list-group-item">Tuiter</div>
    
    {/* {NavigationTabs.map(nav => NavigationItem(nav))} */}

     <div className={`list-group-item
                    ${active === 'Home'?'active':''}`}
                    onClick={handleNavClick}
                    >
       Home 
     </div>
     <div className={`list-group-item
                    ${active === 'Explore'?'active':''}`}
                    onClick={handleNavClick2}
                    >
       Explore
     </div>
     <div className={`list-group-item
                    ${active === 'notifications'?'active':''}`}
                    >
       Notifications
     </div>
     <div className={`list-group-item
                    ${active === 'messages'?'active':''}`}
                    >
       Messages
     </div>
     <div className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}
                    >
       Bookmarks
     </div>
     <div className={`list-group-item
                    ${active === 'lists'?'active':''}`}
                    >
       Lists
     </div>
     <div className={`list-group-item
                    ${active === 'profile'?'active':''}`}
                    >
       Profile
     </div>
     <div className={`list-group-item
                    ${active === 'more'?'active':''}`}
                    >
       More
     </div>
   </div>
 );
};
export default NavigationSidebar;