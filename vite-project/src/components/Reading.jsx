import React from "react";

class Reading extends React.Component {

  preventDuplicationOnComplete = (index) => {
    for (let i = 0; this.props.completedList.length > i; i++) {
      if (
        this.props.readingList[index].id ===
        this.props.completedList[i].id
      ) {
        return true;
      }
    }
    return false;
  };

  preventDuplicationOnActive = (index) => {
    for (let i = 0; this.props.readingList.length > i; i++) {
      if (
        this.props.booksCollection[index].id ===
        this.props.readingList[i].id
      ) {
        return true;
      }
    }
    return false;
  };


  render() {
    const mapOnReadingList = this.props.readingList.map(
        (item, index) => {
          return (
            <tr key={index}>
              <td className="tdWidth">{item.book}</td>
              <td className="tdWidth">{item.author}</td>
              <td className="tdWidth"> <img src={item.img} alt="poster"  style={{width:'80px' , height:'160'}}/> </td>

              <td>
                <button
                  onClick={() => {
                    const addedToReadingList = [
                      ...this.props.readingList,
                    ];
                    addedToReadingList.splice(index, 1);
                    console.log(index);
                    // this.setState({
                    //   readingList: addedToReadingList,
                    // });
                    this.props.usingSetStateOnReading(addedToReadingList)
                  }}
                >
                  DELETE
                </button>
                <button
                  onClick={() => {
                    if (!this.preventDuplicationOnComplete(index)) {
                      const addedCompletedList = [
                        ...this.props.completedList,
                      ];
  
                      addedCompletedList.push(
                        this.props.readingList[index]
                      );
                    //   this.setState({
                    //     completedList: addedCompletedList,
                    //   });

                    this.props.usingSetStateOnCompleted(addedCompletedList)

                     const deleteFromReadingWhenCompleted = [...this.props.readingList];
                      deleteFromReadingWhenCompleted.splice(index , 1);
                    //   this.setState({
                    //       readingList: deleteFromReadingWhenCompleted})
                    this.props.usingSetStateOnReading(deleteFromReadingWhenCompleted);

                    } else {
                      alert("You already addes this book to complete");
                    }
                  }}
                >
                  COMPLETED
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
          {mapOnReadingList}
        </table>
      </div>
    );
  }
}

export default Reading;
