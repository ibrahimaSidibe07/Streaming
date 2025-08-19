import { LucideView, View } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Film(props) {
    return (
        <div className={` card bg-base-300 mx-5 my-5 w-96 shadow-sm shadow-zinc-700 h-100 mb-2  ${props.className} `}>
            <figure>
                <img src={props.imageSrc} className=" w-full" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.Title}</h2>
                <p>{props.description}</p>
                <div className="card-actions">
                    <NavLink to={`/see/${props.filmID || 1}`}>
                        <LucideView className="text-red-300" />
                    </NavLink>
                </div>

                <div className="card-actions justify-end">
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn btn-error" onClick={() => document.getElementById("my_modal_1").showModal()}>
                        open modal
                    </button>
                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">
                                The moovie <span className="text-xl  font-bold font-serif">{props.Title}</span> add
                                succesfuly{" "}
                            </p>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn btn-error">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
}
