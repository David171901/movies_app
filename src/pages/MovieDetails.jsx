import { useParams } from "react-router";
import { useEffect, useState } from "react";

function MovieDetails() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/"+movieId,{
          headers:{
            Authorization:
            "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM5YmIxNGUyNzJjODM2ZWY3MjhiOTFlZGQwYzQwNyIsInN1YiI6IjYyODcxY2IyMDg1OWI0MTQ5ZDJjMmM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkNPoktPCwafiQKQoWBURCYPf98Ubkc2JSRbg34AWlw",
            "Content-Type": "application/json;charset=utf-8"
          }
        }).then((result)=> result.json()).then((data)=>{
            setMovie(data);
        });
      },[movieId])


      if (!movie) {
        return null;
      }

    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-x-0 md:space-x-10">
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