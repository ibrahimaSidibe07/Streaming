import { useParams } from "react-router-dom";
import { Mcontener } from "./componant/movieCompo/Mcontener";
import { Film } from "./componant/movieCompo/Movie";
import { Sidbar } from "./componant/navbar/Sidbar";

function See({ seeMoovie }) {
    const { id } = useParams();
    console.log("params", id);
    function handleSidebar() {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("w-48");
        sidebar.classList.add("transition-all", "duration-300");
    }
    return (
        <div className="grid w-screen grid-cols-[auto_1fr] h-screen">
            <Sidbar className="w-12 overflow-hidden bg-base-300" onBtnClick={handleSidebar} />
            <Mcontener className="overflow-y-scroll" moovieClassName=" items-center mt-15 ">
                {seeMoovie
                    .filter(film => film.id === Number(id))
                    .map(film => (
                        <Film
                            className="h-160 w-250 -mt-2"
                            key={film.id}
                            imageSrc={film.image}
                            Title={film.title}
                            description={film.genre.join(", ")} // join pour afficher proprement le tableau
                            filmID={film.id}
                        />
                    ))}
            </Mcontener>
        </div>
    );
}

export default See;
