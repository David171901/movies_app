import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";

function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading,setIsLoading] = useState(true)
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        get("/movie/"+movieId).then((data)=>{
            setMovie(data);
            setIsLoading(false)
        });
      },[movieId])

      if(isLoading){
          return <Spinner></Spinner>
      }

      if (!movie) {
        return null;
      }

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
            <img
            src={imageUrl}
            alt={movie.title}
            className="rounded-lg"
            />
            <div className="text-2xl p-3 text-justify">
                <p>
                    <span className="font-bold">Title:</span> <span className="font-light">{movie.title}</span>
                </p>
                <p>
                    <span className="font-bold">Popularity:</span> <span className="font-light">{movie.popularity}</span>
                </p>
                <p>
                    <span className="font-bold">Original Language:</span> <span className="font-light">{movie.original_language}</span>
                </p>
                <p>
                    <span className="font-bold">Description:</span> <span className="font-light">{movie.overview}</span>
                </p>
            </div>
        </div>
    );
}

export {MovieDetails}