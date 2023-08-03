import { NavLink } from "react-router-dom";
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink to={to} className={({ isActive }) => isActive ? "active text-xl font-semibold" : "text-xl font-semibold text-white hover:text-white"}>
            {children}
        </NavLink>
    );
};

export default ActiveLink;