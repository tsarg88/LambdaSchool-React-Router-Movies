import React from 'react';
import { Link } from 'react-router-dom'

const SavedList = props => (
  //console.log('from savedlist:', props)
  <div className="saved-list">
    <h3>Saved Movies:</h3>
    {props.list.map(movie => (
      <span className="saved-movie">{movie.title}</span>
    ))}
    {/* <div className="home-button" onClick={() => props.history.push(`/`)}>Home</div> */}
    <div className="home-button"><Link to='/'>Home</Link></div>
  </div>
);

export default SavedList;
