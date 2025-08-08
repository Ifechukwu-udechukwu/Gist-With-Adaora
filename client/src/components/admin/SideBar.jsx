import { NavLink } from "react-router-dom";

const SideBar = () => {
    return (
        <div className="flex flex-col border-r border-black-200 min-h-full pt-6">

            <NavLink
                end = {true}
                to="/admin"
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? "bg-black/10 border-r-4 border-black" : ""
                    }`
                }
            >
                <img src="/house.png" alt="icon" className="min-w-4 w-5" />
                <p className="hidden md:inline-block">Dashboard</p>
            </NavLink>

            <NavLink
                
                to="/admin/addBlog"
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? "bg-black/10 border-r-4 border-black" : ""
                    }`
                }
            >
                <img src="/more.png" alt="icon" className="min-w-4 w-5" />
                <p className="hidden md:inline-block">Add blogs</p>
            </NavLink>

             <NavLink
                
                to="/admin/listBlog"
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? "bg-black/10 border-r-4 border-black" : ""
                    }`
                }
            >
                <img src="/list.png" alt="icon" className="min-w-4 w-5" />
                <p className="hidden md:inline-block">Blog lists</p>
            </NavLink>

             <NavLink
                
                to="/admin/comments"
                className={({ isActive }) =>
                    `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer ${isActive ? "bg-black/10 border-r-4 border-black" : ""
                    }`
                }
            >
                <img src="/chat.png" alt="icon" className="min-w-4 w-5" />
                <p className="hidden md:inline-block">Comments</p>
            </NavLink>

        </div>
    );
}

export default SideBar;