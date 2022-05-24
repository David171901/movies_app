import { useEffect } from 'react';
import { useQuery } from "../hooks/useQuery";
import {get} from '../utils/httpClient.js'
import {MovieCard} from "./MovieCard";
import { useState } from 'react';
import { Spinner } from './Spinner.jsx';
import InfiniteScroll from 'react-infinite-scroll-component';

function MovieSection(props){
    const [isLoading,setIsLoading] = useState(true)
    const [movies,setMovies] = useState([])
    const [page, setPage] = useState(1);
    const [hasMore,setHasMore] = useState(true)

    const query = useQuery();
    const search = query.get("search");  

    useEffect(() => {
        setIsLoading(true);
        const searchUrl = search
          ? "/search/movie?query=" + search + "&page=" + page
          : "/discover/movie?page=" + page;
        get(searchUrl).then((data) => {
          setMovies((prevMovies) => prevMovies.concat(data.results));
          setHasMore(data.page < data.total_pages);
          setIsLoading(false);
        });
      }, [search, page]);
    
    return(
        <InfiniteScroll
          dataLength={movies.length}
          hasMore={hasMore}
          next={() => setPage((prevPage) => prevPage + 1)}
          loader={<Spinner/>}>
            <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 space-y-10 md:space-y-0  space-x-0 md:space-x-10'>
                {
                    movies.map((el)=>{
                    return <MovieCard 
                    key={el.id} 
                    movie={el}>
                    </MovieCard>
                    })
                }
            </ul>
        </InfiniteScroll>

    );
}

export  {MovieSection}