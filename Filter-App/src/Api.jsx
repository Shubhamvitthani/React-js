import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

const Api = () => {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [singers, setSingers] = useState([]);
  const [selectedSinger, setSelectedSinger] = useState("All");

  const myMusic = () => {
    fetch("http://localhost:5000/songs")
      .then((res) => res.json())
      .then((data) => {
        setSongs(data);
        setFilteredSongs(data);
        const uniqueSingers = ["All", ...new Set(data.map((song) => song.star))];
        setSingers(uniqueSingers);
      });
  };

  useEffect(() => {
    myMusic();
  }, []);

  const filterBySinger = (singer) => {
    setSelectedSinger(singer);
    if (singer === "All") {
      setFilteredSongs(songs);
    } else {
      setFilteredSongs(songs.filter((song) => song.star === singer));
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4 text-primary">🎵 Music List</h1>

      <div className="mb-4 p-4 bg-white rounded shadow-sm">
        <h4 className="mb-3 text-secondary">🎤 Select a Singer</h4>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {singers.map((singer, index) => (
            <div
              key={index}
              onClick={() => filterBySinger(singer)}
              className={`badge p-3 fs-6 ${selectedSinger === singer ? "bg-primary text-white" : "bg-light text-dark"} shadow-sm`}
              style={{
                cursor: "pointer",
                borderRadius: "1rem",
                minWidth: "120px",
                textAlign: "center",
                transition: "0.3s ease",
              }}
            >
              🎵 {singer}
            </div>
          ))}
        </div>
      </div>

      <div className="row justify-content-center">
        {filteredSongs.map((val, i) => (
          <div key={i} className="col-md-4 col-lg-3 d-flex align-items-stretch mb-4">
            <div className="card shadow-sm w-100">
              <img
                src={val.image}
                className="card-img-top"
                alt={val.name}
                style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "0.5rem", borderTopRightRadius: "0.5rem" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{val.name}</h5>
                <p className="card-text">By: {val.star}</p>
                <audio controls style={{ width: "100%", marginTop: "auto" }}>
                  <source
                    src={val.audio || "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"}
                    type="audio/mpeg"
                  />
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Api;
