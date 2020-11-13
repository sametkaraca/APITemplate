import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div>
        <h2>Our Tours</h2>
        <hr />
        <div>
          {tours.map((tour) => (
            <Tour key={tours.id} {...tour} removeTour={removeTour} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tours;
