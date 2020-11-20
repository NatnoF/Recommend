import React, { useState, useContext } from 'react'
import { UserContext } from "../../utils/UserContext";
import "../Feed/Feed.css";
import { Icon } from "../Saved/SavedProperties";
import SavedBookResults from "../SavedBookResults";
import API from '../../utils/API';

const Saved = () => {
  const [books, setBooks] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [user, dispatch] = useContext(UserContext);
  const [count, setCount] = useState(0);

  const getBookList = () => {
    API.getSavedBooks(user.username)
    .then((res) => {
      setBooks(res.data);
    });

  };

  if (count === 0) {
    getBookList();
    setCount(count + 1);
  }

  return (
    <div className="feed">
      <div className="feedHeader">
        <Icon to="/">Recommend</Icon>
      </div>
      {books.length ? (
        console.log(books),
        <SavedBookResults books={books} />
      ): <h2 className="text">{"You Have No Books Saved. (Only Users May Save Books)"}</h2>}
    </div>
  );
}

export default Saved;