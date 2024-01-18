import React, { useState, useEffect } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
const MoviesContent = () => {
  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
   
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
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner animation="border" role="status"></Spinner>
          <span>Loading...</span>
        </div>
      ) : (
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
              ))}
            </ul>
          </Container>
        </React.Fragment>
      )}
    </div>
  );
};
export default MoviesContent;
