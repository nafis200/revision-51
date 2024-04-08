import { Outlet } from "react-router";
import Navabr from "./Navabr";
import { useContext } from "react";
import { AuthContext } from "./Authprovider";



const Home = () => {

 
    return (
        <div>
            <Navabr></Navabr>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;