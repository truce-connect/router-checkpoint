import React from 'react';
import { Link, useParams } from 'react-router-dom';

const MovieDescription = ({ title, description, posterURL,}) => {
// const {id} = useParams();
// const movie = movie.find((m) => m.id === parseInt(id))
  return (
    <div>
      <MovieDescription/>
      <Link to="/App">Back to Home</Link>
      <div className="movie-card">
        <img src={posterURL} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        {/* { <p>Rating: {rating}</p> } */}
      </div>
     
      </div>
  );
};

export default MovieDescription;