import { Outlet } from "react-router";
import Navabr from "./Navabr";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";
import Swipper from "./Swipper"
import Map from "./Map"

const Home = () => {

 
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
            <Swipper></Swipper>
            <Map></Map>
            
            
        </div>
    );
};

export default Home;