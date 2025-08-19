import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/AppContext";

const NavBar = () => {
    const {navigate, token} = useAppContext();
    return (
        <div className="flex justify-between items-center py-3 mx-8 sm:mx-20 xl:mx-32 cursor-pointer">
            <div className="flex items-center" onClick={() => navigate("/")}>
                <img 
                    src="/logo.png" 
                    alt="logo" 
                    className="w-20 h-20 rounded-full" 
                />
                <b className="ml-3 text-lg sm:text-xl leading-none">
                    ADAORA's EDIT ✨
                </b>
            </div>

            <button 
                onClick={() => navigate("/admin")} 
                className="cursor-pointer rounded-full bg-pink-500 hover:bg-pink-700 text-white px-6 py-2 text-sm sm:text-base transition"
            >
                {token ? "Dashboard →" : "Login →"}
            </button>
        </div>
    );
};

export default NavBar;




