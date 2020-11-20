import React from "react";
import "../Feed/Feed.css";
import { Icon } from "../Saved/SavedProperties";
import BookResults from "../BookResults";

const Saved = () => {
  return (
    <div className="feed">
      <div className="feedHeader">
        <Icon to="/">Recommend</Icon>
      </div>
      {/* <BookResults /> */}
    </div>
  );
}

export default Saved;