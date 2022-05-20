import { Link } from "react-router-dom";

function MovieCard(props){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + props.movie.poster_path;
    return(
        <li className="flex flex-col justify-center items-center mb-10 first:mt-10 cursor-pointer" >
            <Link to={'/movies/'+props.movie.id}>
                <img
                    width={230}
                    height={345}
                    src={imageUrl}
                    alt={props.movie.title}
                    className="transition duration-150 ease-linear hover:opacity-30 rounded-lg"
                />
                <p className="text-lg text-center">{props.movie.title}</p>
            </Link>
        </li>
    );
}

export  {MovieCard}