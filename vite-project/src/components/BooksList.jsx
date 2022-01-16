import React from "react";
import { Redirect } from "react-router-dom";

class BookList extends React.Component {
  preventDuplicationOnActive = (index) => {
    for (let i = 0; this.props.readingList.length > i; i++) {
      if (
        this.props.booksCollection[index].id === this.props.readingList[i].id
      ) {
        return true;
      }
    }
    return false;
  };

  render() {




    const mapOnBookCollection = this.props.booksCollection.map(
      (item, index) => {
        return (
          <tr key={index}>
            <td className="tdWidth">{item.book}</td>
            <td className="tdWidth">{item.author}</td>
            <td className="tdWidth"> <img src={item.img} alt="poster"  style={{width:'80px' , height:'160'}}/> </td>
            <td>
              <button
                onClick={() => {
                  if (!this.preventDuplicationOnActive(index)) {
                    const addedToReadingList = [...this.props.readingList];
                    addedToReadingList.push(this.props.booksCollection[index]);
                    // this.setState({
                    //   readingList: addedToReadingList,
                    // });
                    this.props.usingSetStateOnReading(addedToReadingList);
                  } else {
                    alert("You already addes this book to active");
                  }
                }}
              >
                READING
              </button>
            </td>
            <td>
              <button onClick={()=> {
              this.props.infoDisplayUsingSetState(true) 
              this.props.usingSetStateOnItemInfo(item) 

              }}>
                INFO
              </button>
            </td>
          </tr>
        );
      }
    );

    return (
      <div>
        <table>
          <tr className="">
            <th>Book Name</th> <th>Author</th>
          </tr>
          {mapOnBookCollection}
          {this.props.isRedirectInfoDisplay? <Redirect to={"/InfoDisplay" }/> :null}

        </table>
      </div>
    );
  }
}

export default BookList;
