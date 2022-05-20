import { useEffect } from 'react';
// import { useState } from 'react';
import {get} from '../utils/httpClient.js'
import {MovieCard} from "./MovieCard";
import { useState } from 'react';
import { Spinner } from './Spinner.jsx';

function MovieSection(props){
    const [isLoading,setIsLoaging] = useState(true)
    const [movies,setMovies] = useState([])

    useEffect(()=>{
        get('/discover/movie').then((data)=>{
            setMovies(data.results);
            setIsLoaging(false)
        });
    },[])
    
    if(isLoading){
        return <Spinner></Spinner>
    }

    return(
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 space-y-10 md:space-y-0'>
            {
                movies.map((el)=>{
                return <MovieCard key={el.id} movie={el}></MovieCard>
                })
            }
        </ul>
    );
}

export  {MovieSection}