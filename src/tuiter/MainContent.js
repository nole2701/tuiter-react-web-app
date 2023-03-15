import React from "react";
import { useSelector } from "react-redux";
import ExploreComponent from "./explore";
import HomeComponent from "./home";

const MainContent = () => {
  const activeNav = useSelector(state => state.nav);
  return (
    <div>
    {activeNav === 'Explore' && <ExploreComponent/>}
    {activeNav === 'Home' && <HomeComponent/>}
    </div>
  );
}
export default MainContent