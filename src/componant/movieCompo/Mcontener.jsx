import { Film } from "./Movie";

export function Mcontener(props) {
    return (
        <div className={` p-2   ${props.className || ""}`}>
            <div className=" bg-base-300  max-w-sm p-3 rounded-r-2xl">
                <h1 className=" text-xl font-bold">
                    Welcomme to <span className="text-red-400"> {props.titleHeader}</span>
                </h1>
                <p className="text-sm text-stone-50/30"> {props.descHeader} </p>
            </div>
            <h1 className="text-5xl text-center font-mono">{props.Title} </h1>
            <div
                className={` flex w-[96%] mx-auto h-120 flex-wrap gap-4 justify-center ${props.moovieClassName || ""}`}>
                {props.children}
            </div>
        </div>
    );
}
