import React, { Component } from "react";
import BooksList from "./BooksList";
import Reading from "./Reading";
import Completed from "./Completed";
import InfoDisplay from "./InfoDisplay";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from "./NotFound";
// import axios from "axios";

class NavbarBookDisplay extends Component {
  state = {
    booksCollection: [
      { id: 1, book: "The Princess Bride", author: "William Goldman", img:"../../public/Media/Books_picture/The_Princess_Bride.jpg", description: "Here William Goldman's beloved story of Buttercup, Westley, and their fellow adventurers finally receives a beautiful illustrated treatment" },
      { id: 2, book: "Strength to Love", author: "Martin Luther King", img:"../../public/Media/Books_picture/Strength_To_Love.jpg" , description: "As Martin Luther King, Jr., prepared for the Birmingham campaign in early 1963, he drafted the final sermons for Strength to Love"  },
      { id: 3, book: "The Fight", author: "Norman Mailer", img:"../../public/Media/Books_picture/The_Fight.jpg", description: "The Fight shines a much needed light on the troubling games DC politicians and insiders play with the American people"  },
      { id: 4, book: "Will", author: "Will Smith", img:"../../public/Media/Books_picture/Will.jpg", description: "The Fight shines a much needed light on the troubling games DC politicians and insiders play with the American people"  },
      { id: 5, book: "Greenlights", author: "Matthew McConaughey", img:"../../public/Media/Books_picture/Greenlights.jpg"  },
      { id: 6, book: "The Lincoln Highway", author: "The Lincoln Highway", img:"../../public/Media/Books_picture/Lincoln_Highway.jpg"  },
      { id: 7, book: "The 1619 Project", author: "Random House", img:"../../public/Media/Books_picture/The_1619_Project.jpg"  },
      { id: 8, book: "Light Years from Home", author: "Mike Chen", img:"../../public/Media/Books_picture/Light_Years_From_Home.jpg"  },
      { id: 9, book: "It Ends with Us", author: "Colleen Hoover", img:"../../public/Media/Books_picture/It_Ends_With_Us.jpg"  },
      { id: 10, book: "The Magnolia Palace", author: "Fiona Davis", img:"../../public/Media/Books_picture/The_Magnolia_palace.jpg"  },
    ],

    readingList: [],
    completedList: [],
    isRedirectInfoDisplay: false,
    itemInfo: { id: 1, book: "The Princess Bride", author: "William Goldman", img:"../../public/Media/Books_picture/The_Princess_Bride.jpg", description: "Here William Goldman's beloved story of Buttercup, Westley, and their fellow adventurers finally receives a beautiful illustrated treatment" },


  };

  // URL = "./data.json";

  //  componentDidMount() {
  //   console.log("checking Didmount");
  //    axios
  //     .get("../public/data.json")
  //     .then((respons) => {
  //       console.log(respons.data);
  //       this.setState({ booksCollection: respons.data });
  //     })
  //     .catch((err) => console.log(err, "error"));
  // }

  
  usingSetStateOnReading = (setStateKey) => {
    this.setState({ readingList: setStateKey });
  };
  
  usingSetStateOnCompleted = (setStateKey) => {
    this.setState({ completedList: setStateKey });
  };
  
  infoDisplayUsingSetState = (setStateKey) =>{
    this.setState({isRedirectInfoDisplay: setStateKey})
  }

  usingSetStateOnItemInfo = (setStateKey) => {
    this.setState({ itemInfo: setStateKey });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="navbar">
          <Link to={"/"}>Books List</Link>
          <Link to={"/Reading"}>Reading</Link>
          <Link to={"/Completed"}>Completed</Link>
          <Link to={"/InfoDisplay"}>Info Display</Link>

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <BooksList
                  booksCollection={this.state.booksCollection}
                  readingList={this.state.readingList}
                  usingSetStateOnReading={this.usingSetStateOnReading.bind(this)}
                  isRedirectInfoDisplay = {this.state.isRedirectInfoDisplay}
                  infoDisplayUsingSetState={this.infoDisplayUsingSetState.bind(this)}
                  />
              )}
            />

            <Route
              exact
              path="/Reading"
              render={() => (
                <Reading
                  booksCollection={this.state.booksCollection}
                  readingList={this.state.readingList}
                  completedList={this.state.completedList}
                  usingSetStateOnReading={this.usingSetStateOnReading.bind(
                    this
                  )}
                  usingSetStateOnCompleted={this.usingSetStateOnCompleted.bind(
                    this
                  )}
                />
              )}
            />

            <Route
              exact
              path="/Completed"
              render={() => (
                <Completed
                  readingList={this.state.readingList}
                  completedList={this.state.completedList}
                  usingSetStateOnCompleted={this.usingSetStateOnCompleted.bind(
                    this
                  )}
                />
              )}
            />

            <Route
              exact
              path="/InfoDisplay"
              render={() => (
                <InfoDisplay
                item = {this.state.itemInfo}
                />
              )}
            />

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default NavbarBookDisplay;
