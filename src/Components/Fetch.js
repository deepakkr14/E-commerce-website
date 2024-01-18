import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const MoviesContent = () => {
  const [show, setUnShow] = useState(true);
  const [Movies, setMovies] = useState([]);
  const fetchData = async () => {
    setUnShow(false);
    const Data = await fetch("https://swapi.dev/api/films");
    let response = await Data.json();
    const transferedData = response.results.map((item) => {
      return {
        id: item.episode_id,
        date: item.release_date,
        title: item.title,
        director: item.director,
      };
    });
    setMovies(transferedData);
  };
  console.log(Movies);
  return (
    <React.Fragment>
      <Container>
        <h1 className="text-center"> Movies</h1>
        <ul className="my-5">
          {Movies.map((item) => (
            // <div>
            <li
              key={item.id}
              className="d-flex justify-content-between pt-4   border-bottom"
            >
              <span>{item.date} </span>
              <span>{item.director} </span>
              <span>{item.title}</span>
              <span>
                <Button className="mb-3">Buy Tickets</Button>
              </span>
            </li>
            // </div>
          ))}
        </ul>
      </Container>
      {show && (
        <div className=" d-flex justify-content-center align-item-center">
          <Button className="my-3 " onClick={fetchData}>
            Fetch Data
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};
export default MoviesContent;