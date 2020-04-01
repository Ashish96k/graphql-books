import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

function BookDetails(props) {
  console.log('book details compo', props);

  const displayBookDetails = () => {
    const { book } = props.data;
    if (book) {
      return (
        <div>
          <h3>{book.name}</h3>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author</p>
          <ul className='other books'>
            {book.author.books.map(item => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div>No book selected ....</div>;
    }
  };

  return <div id='book-details'>{displayBookDetails()}</div>;
}

export default graphql(getBookQuery, {
  options: props => {
    return {
      variables: {
        id: props.bookId
      }
    };
  }
})(BookDetails);
