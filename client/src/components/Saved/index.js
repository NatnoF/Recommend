import React, { useState, useEffect, useContext } from 'react'
import Auth from "../../utils/Auth";
import { UserContext } from "../../utils/UserContext";
import "../Feed/Feed.css";
import { Icon } from "../Saved/SavedProperties";
import BookResults from "../BookResults";
import API from '../../utils/API';

const Saved = () => {
  const [books, setBooks] = useState([]);
  const [user, dispatch] = useContext(UserContext);
  const [count, setCount] = useState(0);

  const getBookList = () => {
    API.getSavedBooks({userId: user.username})
    .then((res) => {
      setBooks(res.data);
    })
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
        <BookResults books={books}/>
      ): <h2 className="text">{"You Have No Books Saved. (Only Users May Save Books)"}</h2>}
    </div>
  );
}

export default Saved;