import {MovieSection} from './components/MovieSection';
// import {movies} from "./movies"
import {MovieCard} from "./components/MovieCard"
import {LandingPage} from "./pages/LandingPage"
import {MovieDetails} from "./pages/MovieDetails"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie",{
      headers:{
        Authorization:
        "Bearer  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWM5YmIxNGUyNzJjODM2ZWY3MjhiOTFlZGQwYzQwNyIsInN1YiI6IjYyODcxY2IyMDg1OWI0MTQ5ZDJjMmM2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JkNPoktPCwafiQKQoWBURCYPf98Ubkc2JSRbg34AWlw",
        "Content-Type": "application/json;charset=utf-8"
      }
    }).then((result)=> result.json()).then((data)=>{
      setMovies(data.results);
    });
  },[])

  return (
    <Router>
      <header>
        <Link to='/'>
          <h1 className='text-center text-4xl font-bold py-7'>Movie App</h1>
        </Link>
      </header>
      <main className='container mx-auto flex justify-center items-center'>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails
            movie={movies[0]}/>
          </Route>
          <Route path="/">
            <LandingPage>
              <MovieSection>
                {
                  movies.map((el)=>{
                    return <MovieCard key={el.id} movie={el}></MovieCard>
                  })
                }
              </MovieSection>
            </LandingPage>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
