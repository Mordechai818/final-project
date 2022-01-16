import React from "react";

class Completed extends React.Component {


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



  render() {
    const mapOnCompletedList = this.props.completedList.map(
        (item, index) => {
          return (
            <tr key={index}>
              <td className="tdWidth">{item.book}</td>
              <td className="tdWidth">{item.author}</td>
              <td className="tdWidth"> <img src={item.img} alt="poster"  style={{width:'80px' , height:'160'}}/> </td>

              <td>
                <button
                  onClick={() => {
                    const deleteCompletedList = [
                      ...this.props.completedList
                    ];
                    deleteCompletedList.splice(index, 1);
                    // this.setState({
                    //   completedList: deleteCompletedList,
                    // });
                    this.props.usingSetStateOnCompleted(deleteCompletedList)
                  }}
                >
                  DELETE
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
          {mapOnCompletedList}
        </table>
      </div>
    );
  }
}

export default Completed;
