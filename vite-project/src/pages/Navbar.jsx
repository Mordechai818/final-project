import React from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import MoviesCollection from "../components/MoviesCollection/MoviesCollection";
import Register from "../components/Register/Register";
import NotFound from "./NotFound";
import classes from "./Navbar.module.css";
import movieList from "../../public/moviesList.json";

class Navbar extends React.Component {
  state = {
    moviesList: movieList,
    favoriteList: [],
    isRedirectMovieInfo: false,
    movieInfo: [],
  };

  usingSetStateOnFavorite = (setStateKey) => {
    console.log(setStateKey);
    this.setState({ favoriteList: setStateKey });
  };

  MovieInfoUsingSetState = (setStateKey) => {
    this.setState({ isRedirectMovieInfo: setStateKey });
  };

  render() {
    return (
      <BrowserRouter>
        <div className={classes.root}>
          <ul className={classes.navbar}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/MoviesCollection"}>Movies</Link>
            </li>
            <li>
              <Link to={"/Favorites"}>Favorites</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" render={() => <Home />} />

            <Route
              exact
              path="/MoviesCollection"
              render={() => (
                <MoviesCollection
                  moviesList={this.state.moviesList}
                  favoriteList={this.state.favoriteList}
                  usingSetStateOnFavorite={this.usingSetStateOnFavorite.bind(
                    this
                  )}
                  isRedirectMovieInfo={this.state.isRedirectMovieInfo}
                  MovieInfoUsingSetState={this.MovieInfoUsingSetState.bind(
                    this
                  )}
                />
              )}
            />

            <Route
              exact
              path="/Favorites"
              render={() => (
                <MoviesCollection moviesList={this.state.favoriteList} />
              )}
            />

            <Route
              exact
              path="/MoviesMileStone"
              render={() => <MoviesMileStone />}
            />

            <Route
              exact
              path="/MoviesInfoScreen"
              render={() => <MoviesInfoScreen />}
            />

            <Route exact path="/register" render={() => <Register />} />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default Navbar;
