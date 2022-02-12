import React from "react";
import classes from "./CurrentMovie.module.css";

export class CurrentMovie extends React.Component {
  render() {
    return (
      <div className={classes.root}>
        <div className={classes.fanart}>
          <img src={this.props.movie.fanart} alt="" />
          
        </div>


        <div className={classes.imageContainer}>
          <img
            className={classes.img}
            src={this.props.movie.images}
            alt={this.props.movie.name}
          />
        </div>
        <div className={classes.details}>
          <button onClick={() => this.props.goBack()}>Go back</button>
          <h1>{this.props.movie.name}</h1>
          <p>{this.props.movie.description}</p>
        </div>
      </div>
    );
  }
}
