import { useState } from "react";
import { Filmlisr } from "./filmlisr";
import { Mcontener } from "./componant/movieCompo/Mcontener";
import { Film } from "./componant/movieCompo/Movie";
import { Sidbar } from "./componant/navbar/Sidbar";
import { Routes, Route } from "react-router-dom";
import See from "./See";

function App() {
    const [MOOVIELIST, setMOOVIELIST] = useState([
        {
            id: 1,
            title: "Inception",
            director: "Christopher Nolan",
            year: 2010,
            genre: ["Sci-Fi", "Action"],
            rating: 8.8,
            image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            year: 1994,
            genre: ["Drama"],
            rating: 9.3,
            image: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        },
        {
            id: 3,
            title: "The Dark Knight",
            director: "Christopher Nolan",
            year: 2008,
            genre: ["Action", "Crime", "Drama"],
            rating: 9.0,
            image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        },
        {
            id: 4,
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            year: 1994,
            genre: ["Crime", "Drama"],
            rating: 8.9,
            image: "https://image.tmdb.org/t/p/w500/tptjnB6RsyMyGIVUNXvsP6Nq8zG.jpg",
        },
        {
            id: 5,
            title: "Fight Club",
            director: "David Fincher",
            year: 1999,
            genre: ["Drama"],
            rating: 8.8,
            image: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
        },
        {
            id: 6,
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            year: 1994,
            genre: ["Drama", "Romance"],
            rating: 8.8,
            image: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        },
        {
            id: 7,
            title: "The Matrix",
            director: "Lana & Lilly Wachowski",
            year: 1999,
            genre: ["Sci-Fi", "Action"],
            rating: 8.7,
            image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
        },
        {
            id: 8,
            title: "Goodfellas",
            director: "Martin Scorsese",
            year: 1990,
            genre: ["Biography", "Crime", "Drama"],
            rating: 8.7,
            image: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        },
        {
            id: 9,
            title: "The Lord of the Rings: The Fellowship of the Ring",
            director: "Peter Jackson",
            year: 2001,
            genre: ["Adventure", "Fantasy"],
            rating: 8.8,
            image: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        },
        {
            id: 10,
            title: "Interstellar",
            director: "Christopher Nolan",
            year: 2014,
            genre: ["Sci-Fi", "Drama"],
            rating: 8.6,
            image: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        },
    ]);

    function handleSidebar() {
        const sidebar = document.querySelector("#sidebar");
        sidebar.classList.toggle("w-48");
        sidebar.classList.add("transition-all", "duration-300");
    }
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="grid w-screen grid-cols-[auto_1fr] h-screen">
                        <Sidbar className="w-12 overflow-hidden bg-base-300" onBtnClick={handleSidebar} />
                        <Mcontener className="overflow-y-scroll" moovieClassName=" items-center mt-15 ">
                            {MOOVIELIST.filter(film => film.id <= 3).map(film => (
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
                }
            />

            <Route path="/filmliste" element={<Filmlisr MVLISTE={MOOVIELIST} />} />
            <Route path="/see/:id" element={<See seeMoovie={MOOVIELIST} />} />
        </Routes>
    );
}
export default App;
