import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const Api = () => {
  const [songs, setSongs] = useState([]);

  const myMusic = () => {
    fetch("http://localhost:5000/songs")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched songs:", data);
        setSongs(data); // assuming data is an array of songs
      });
  };

  useEffect(() => {
    myMusic();
  }, []);

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4 text-primary">🎵 Music List</h1>
      <div className="row justify-content-center">
        {songs.map((val, i) => (
          <div key={i} className="card m-2" style={{ width: "18rem" }}>
            <img
              src={val.image}
              className="card-img-top"
              alt={val.name}
              style={{ height: "180px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{val.name}</h5>
              <p className="card-text">By: {val.star}</p>
              <audio controls style={{ width: "100%" }}>
                <source src={val.audio} type="audio/mp3" />
                Your browser does not support the audio tag.
              </audio>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Api;
