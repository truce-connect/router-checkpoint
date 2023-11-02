import "./MovieCard.css"
import { Link } from "react-router-dom"



const MovieCard = ({ title, description, rating, trailerURL, id}) => {
  return (
    
      <Link to={`/movie/${id}`}>
      <div className="container">
      
      <iframe src={trailerURL} allowFullScreen/>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Rating:{rating}</p>
      
    </div>
    </Link>
  )

  
}

export default MovieCard