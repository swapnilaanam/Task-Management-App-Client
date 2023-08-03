import { Link } from "react-router-dom";
import ActiveLink from "../ActiveLink/ActiveLink";
import { MdAssignment, MdAssignmentAdd } from "react-icons/md";

const Sidebar = () => {

    const navItems = <>
        <li className="flex justify-center">
            <ActiveLink to="/" className="flex justify-center items-center gap-10">
                <MdAssignment />
                <span>View Tasks</span>
            </ActiveLink>
        </li>
        <li>
            <ActiveLink to="/addtask" className="flex justify-center items-center gap-5">
                <MdAssignmentAdd />
                <span>Add Task</span>
            </ActiveLink>
        </li>
    </>

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side bg-slate-800">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <Link to="/">
                        <h1 className="text-white text-3xl font-bold pt-7 px-4 mb-2">Task Master</h1>
                    </Link>
                    <ul className="menu p-5 gap-1 w-64 h-full text-base-content">
                        {navItems}
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Sidebar;