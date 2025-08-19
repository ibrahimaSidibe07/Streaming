import { Mcontener } from "./componant/movieCompo/Mcontener";
import { Film } from "./componant/movieCompo/Movie";
import { Sidbar } from "./componant/navbar/Sidbar";

export function Filmlisr({ MVLISTE }) {
    function handleSidebar() {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("w-48");
        sidebar.classList.add("transition-all", "duration-300");
    }
    return (
        <div className="grid w-screen grid-cols-[auto_1fr] h-screen">
            <Sidbar className="w-12 overflow-hidden bg-base-300" onBtnClick={handleSidebar} />
            <Mcontener
                className="overflow-y-scroll"
                moovieClassName=" items-center mt-15 "
                titleHeader={"sidibela"}
                descHeader={" watch our mouvie list "}
                Title={"MOOVIE LIST"}>
                {MVLISTE.map(film => (
                    <Film
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
