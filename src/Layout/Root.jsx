import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";


const Root = () => {
    return (
        <div className="flex flex-col text-center items-center gap-5">
            <NavBar/>
            <Outlet/>
            <h2>footer</h2>
        </div>
    );
};

export default Root;