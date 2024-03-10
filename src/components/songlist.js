import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import NewSong from "./newSong";

const Songlist = () => {
  const [songs, setsongs] = useState([
    { title: " playlist of linkin park", id: 1 },
    { title: " phonks", id: 2 },
    { title: " sadsong ", id: 3 },
  ]);
  const [age, setage] = useState(20);
  const addSong = (title) => {
    setsongs([...songs, { title, id: uuidv4() }]);
  };
  useEffect(() => {
    console.log("useeffect ran ", songs);
  }, [songs]);
  useEffect(() => {
    console.log("useeffect ran ", age);
  }, [age]);
  return (
    <div className="songlist">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSong addSong={addSong} />
      <button onClick={() => setage(age + 1)}>ADD 1to age {age}</button>
    </div>
  );
};

export default Songlist;
