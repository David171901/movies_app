import {LandingPage} from "./pages/LandingPage"
import {MovieDetails} from "./pages/MovieDetails"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  return (
    <Router>
      <header className='bg-black text-white'>
        <Link to='/'>
          <h1 className='text-center text-4xl font-bold py-7'>Movie App</h1>
        </Link>
      </header>
      <main className='container mx-auto flex justify-center items-center'>
        <Switch>
          <Route exact path="/movies/:movieId">
            <MovieDetails/>
          </Route>
          <Route path="/">
            <LandingPage/>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
