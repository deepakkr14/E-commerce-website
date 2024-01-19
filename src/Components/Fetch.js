import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button, Container, Spinner } from "react-bootstrap";
// import MovieAddForm from "./MovieAddForm";
const MoviesContent = () => {
  const [Movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

const fetchData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/films");
      if (!response.ok) {
    
        throw new Error("Could not get data");
      }
      const data = await response.json();
      const transformedData = data.results.map((item) => ({
        id: item.episode_id,
        date: item.release_date,
        title: item.title,
        director: item.director,
      }));
      setMovies(transformedData);
      setLoading(false);
      setError(false);
    } catch (error) {
      console.log(error, "--------------");
      setError(true);
      setLoading(true);
    }
  };
  useEffect(() => {
    
    if (!error) {
   
      fetchData();
    }
    if (error) {
   
      const id = setInterval(
        fetchData()
        , 5000);
        console.log("set interval running");
      setIntervalId(id);
    }
    // Cleanup function
    return () => {
      console.log("cleanup chala");
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    };
  }, [error]);
  
  const stopInterval = useCallback(() => {
    clearInterval(intervalId);
    setIntervalId(null);
    setLoading(false);
  }, [intervalId]);

  const movieList=useMemo(()=> ( <ul className="my-5">
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
</ul>),[Movies])
// const viewform=()=>{
// return <MovieAddForm/>
// }
  return (
    <div>
      {/* <Button onClick={viewform}>add new movie</Button> */}
      {!loading && !intervalId && !Movies && <h2>NO data found</h2>}
      {error && (
        <h2>
          Could not get data <strong>Retrying</strong>
          <button onClick={stopInterval}>Stop fetching data</button>
        </h2>
      )}
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Spinner animation="border" role="status"></Spinner>
          <span> Loading...</span>
        </div>
      )}
      {!loading && !error && (
        <React.Fragment>
          <Container>
            <h1 className="text-center"> Movies</h1>
            {movieList}
          </Container>
        </React.Fragment>
      )}
      {/* )} */}
    </div>
  );
};
export default MoviesContent;
