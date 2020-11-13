import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

export const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const APIFetcher = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  };

  useEffect(() => {
    APIFetcher();
  }, []);

  return (
    <>
      {isLoading === true ? (
        <main>
          <Loading />
        </main>
      ) : (
        <Tours tours={tours} removeTour={removeTour} />
      )}
    </>
  );
};
