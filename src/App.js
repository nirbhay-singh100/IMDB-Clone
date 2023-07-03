import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home"
import Card from "./components/card/Card"
import MovieList from "./components/movieList/MovieList"
import Trending from "./components/trending/Trending"
import Movie from "./pages/movieDetails/Movie";

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;


// fd3e0bc6778757d61da0724cce270e32    API Key