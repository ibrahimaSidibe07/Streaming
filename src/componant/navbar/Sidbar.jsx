import { Contact, Film, FilmIcon, Home, Sidebar, User, User2, User2Icon, UserCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Sidbar = props => {
    return (
        <div id="sidebar" className={` flex flex-col gap-4 p-2 ${props.className || ""}`}>
            <button className="p-2" onClick={props.onBtnClick}>
                <Sidebar />
            </button>
            <NavLink to={"/"} className="flex gap-2 hover:bg-base-100 p-2 rounded-md">
                <Home className="shrink-0" /> Home
            </NavLink>
            <NavLink to={"/filmliste"} className="flex gap-2 hover:bg-base-100 p-2 rounded-md">
                <Film className="text-red-400 shrink-0" /> Moovie
            </NavLink>
            <NavLink to={"/"} className="flex gap-2 hover:bg-base-100 p-2 rounded-md">
                <Contact className="shrink-0" /> Contact
            </NavLink>
            <NavLink to={"/"} className="flex gap-2 hover:bg-base-100 p-2 rounded-md mt-auto">
                <UserCircle className="shrink-0" /> account
            </NavLink>
        </div>
    );
};
