import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { setNav } from "../reducers/navigation-reducer";

const NavigationItem = (nav) => {
    const active = useSelector(state => state.nav);
  const dispatch = useDispatch();
  const handleNavClick = () => {
    dispatch(setNav(nav))
  };
 return(
    <div className={`list-group-item
    ${active === {nav}?'active':''}`}
    onClick={handleNavClick}>
    {nav} 
</div>
 );
};
export default NavigationItem;
