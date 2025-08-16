import { Film } from "./Movie";

export function Mcontener(props) {
    return (
        <div className={` p-2  ${props.className || ""}`}>
            <div className=" bg-base-300 w-lg p-3 rounded-r-2xl">
                <h1 className=" text-xl font-bold">
                    Welcomme to <span className="text-red-400">Sidibela moovie</span>
                </h1>
                <p className="text-sm text-stone-50/30">here you can find more moovie we'll be happy </p>
            </div>
            <h1 className="text-5xl text-center font-mono">Home</h1>
            <div className="flex w-[96%] mx-auto h-120">
                <Film />
                <Film />
                <Film />
            </div>
        </div>
    );
}
