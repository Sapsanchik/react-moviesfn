import React from 'react';

export const Movie = (props) => {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div id={imdbID} className="movie card">
      <div className="card">
        <div className="card-image">
          {Poster === 'N/A' ? (
            <img src={`https://via.placeholder.com/300x450?text=${Title}`} />
          ) : (
            <img src={Poster} />
          )}

          
        </div>
        <span className="card-title">{Title}</span>
        <div className="card-content">
          <p>
            {Year} <br />
            <span className="right">{Type}</span>
          </p>
        </div>
        <div className="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  );
};