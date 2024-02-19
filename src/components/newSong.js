import React, { useState } from "react";

const NewSong = ({ addSong }) => {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    addSong(title);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>song name</label>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="submit" value="addsong" />
    </form>
  );
};

export default NewSong;
