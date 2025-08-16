import { Mcontener } from "./componant/movieCompo/Mcontener";
import { Sidbar } from "./componant/navbar/Sidbar";
import useSWR from "swr";

function App() {
    const API_MOVIE = "https://imdb.iamidiotareyoutoo.com/search?tt=tt2250912";

    const fetcher = (...args) => fetch(...args).then(res => res.json());
    const { data, error, isLoading } = useSWR(`${API_MOVIE}`, fetcher);
    console.log(data);

    function handleSidebar() {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("w-48");
        sidebar.classList.add("transition-all", "duration-300");
    }
    return (
        <div className="grid w-screen grid-cols-[auto_1fr] h-screen">
            <Sidbar className="w-12 overflow-hidden bg-base-300" onBtnClick={handleSidebar} />
            <Mcontener className="" />
        </div>
    );
}
export default App;
