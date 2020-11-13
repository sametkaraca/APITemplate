import React, { useState } from "react";

const Tour = ({ id, name, image, info, price, removeTour }) => {
  const [readMore, setReadMore] = useState(true);
  return (
    <div>
      <article>
        <img src={image} alt="holiday" />
        <footer>
          <div>
            <h1>{name}</h1>
            <h4>{price}</h4>
            <p>{readMore === false ? info : `${info.substring(0, 200)}...`}</p>
            <button onClick={() => setReadMore(!readMore)}>
              {!readMore ? "Show Less" : "Read More"}
            </button>
          </div>
          <button onClick={() => removeTour(id)}>Not Interested</button>
        </footer>
      </article>
    </div>
  );
};

export default Tour;
