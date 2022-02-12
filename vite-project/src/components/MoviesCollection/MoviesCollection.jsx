import React from "react";
import { CurrentMovie } from "./CurrentMovie/CurrentMovie";
import classes from "./MoviesCollection.module.css";

class MoviesCollection extends React.Component {
  state = {
    currentMovie: undefined,
  };

  preventDuplicationOnFavorite = (index) => {
    for (let i = 0; this.props.favoriteList.length > i; i++) {
      if (this.props.moviesList[index].id === this.props.favoriteList[i].id) {
        return true;
      }
    }
    return false;
  };

  render() {
    const moviesListOnMap = this.props.moviesList.map((movie, index) => {
      return (
        <div key={index}>
          <div className={classes.imageContainer}>
            <img src={movie.images} alt={movie.name} />
          </div>
          {/* <div className="tdWidth"> {movie.name}</div> */}

          <button
            onClick={() => {
              if (!this.preventDuplicationOnFavorite(index)) {
                const addedToFavoriteList = [...this.props.favoriteList];
                addedToFavoriteList.push(this.props.moviesList[index]);
                // this.setState({
                //   favoriteList: addedToFavoriteList,
                // });
                this.props.usingSetStateOnFavorite(addedToFavoriteList);
              } else {
                alert("You already addes this movie to Favorite");
              }
            }}
          >
            Add to favorites
          </button>
          <button onClick={() => this.setState({ currentMovie: movie })}>
            Details
          </button>
        </div>
      );
    });

    if (this.state.currentMovie) {
      return (
        <CurrentMovie
          goBack={() => this.setState({ currentMovie: undefined })}
          movie={this.state.currentMovie}
        />
      );
    } else {
      return <div className={classes.root}>{moviesListOnMap}</div>;
    }
  }
}

export default MoviesCollection;
