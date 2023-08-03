const Navbar = ({children}) => {
    return (
        <div>
            <div className="navbar bg-base-200 px-12 py-4">
                <div className="flex-1">
                    <h2 className="text-2xl text-green-500 font-semibold">{children}</h2>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search Task By Name..." className="input rounded-md input-sm input-bordered w-32 md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;