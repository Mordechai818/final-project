import React from "react";

class BooksDisplayStatus extends React.Component {
  state = {
    booksCollection: [
      { id: 1, book: "The Princess Bride", author: "William Goldman" },
      { id: 2, book: "Strength to Love", author: "Martin Luther King" },
      { id: 3, book: "The Fight", author: "Norman Mailer" },
    ],
    completeBooksCollection: [],
    readingBooksCollection: [],
  };

  preventDuplicationOnComplete = (index) => {
    for (let i = 0; this.state.completeBooksCollection.length > i; i++) {
      if (
        this.state.readingBooksCollection[index].id ===
        this.state.completeBooksCollection[i].id
      ) {
        return true;
      }
    }
    return false;
  };

  preventDuplicationOnActive = (index) => {
    for (let i = 0; this.state.readingBooksCollection.length > i; i++) {
      if (
        this.state.booksCollection[index].id ===
        this.state.readingBooksCollection[i].id
      ) {
        return true;
      }
    }
    return false;
  };

  render() {
    const mapOnCompleteBooksCollection = this.state.completeBooksCollection.map(
      (item, index) => {
        return (
          <tr key={index}>
            <td className="tdWidth">{item.book}</td>
            <td className="tdWidth">{item.author}</td>
            <td>
              <button
                onClick={() => {
                  const deleteCompleteBooksCollection = [
                    ...this.state.completeBooksCollection,
                  ];
                  deleteCompleteBooksCollection.splice(index, 1);
                  this.setState({
                    completeBooksCollection: deleteCompleteBooksCollection,
                  });
                }}
              >
                DELETE
              </button>
            </td>
          </tr>
        );
      }
    );

    const mapOnReadingBooksCollection = this.state.readingBooksCollection.map(
      (item, index) => {
        return (
          <tr key={index}>
            <td className="tdWidth">{item.book}</td>
            <td className="tdWidth">{item.author}</td>
            <td>
              <button
                onClick={() => {
                  const addedToReadingBooksCollection = [
                    ...this.state.readingBooksCollection,
                  ];
                  addedToReadingBooksCollection.splice(index, 1);
                  console.log(index);
                  this.setState({
                    readingBooksCollection: addedToReadingBooksCollection,
                  });
                }}
              >
                DELETE
              </button>
              <button
                onClick={() => {
                  if (!this.preventDuplicationOnComplete(index)) {
                    const addedCompleteBooksCollection = [
                      ...this.state.completeBooksCollection,
                    ];

                    addedCompleteBooksCollection.push(
                      this.state.readingBooksCollection[index]
                    );
                    this.setState({
                      completeBooksCollection: addedCompleteBooksCollection,
                    });
                   const deleteFromReadingWhenCompleted = [...this.state.readingBooksCollection];
                    deleteFromReadingWhenCompleted.splice(index , 1);
                    this.setState({readingBooksCollection: deleteFromReadingWhenCompleted})

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

    const mapOnBookCollection = this.state.booksCollection.map(
      (item, index) => {
        return (
          <tr key={index}>
            <td className="tdWidth">{item.book}</td>
            <td className="tdWidth">{item.author}</td>
            <td>

              <button
                onClick={() => {
                  if (!this.preventDuplicationOnActive(index)) {
                    const addedToReadingBooksCollection = [
                      ...this.state.readingBooksCollection,
                    ];
                    addedToReadingBooksCollection.push(
                      this.state.booksCollection[index]
                    );
                    this.setState({
                      readingBooksCollection: addedToReadingBooksCollection,
                    });
                  } else {
                    alert("You already addes this book to active");
                  }
                }}
              >
                READING
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
        </table>
        <p>READING List:{mapOnReadingBooksCollection}</p>
        <p>COMPLETED List:{mapOnCompleteBooksCollection}</p>
      </div>
    );
  }
}

export default BooksDisplayStatus;
