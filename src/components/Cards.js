import React from "react";

function Cards({ hero }) {
  const { name, thumbnail, description, urls, comics } = hero;

  // console.log(hero);
  return (
    <div className="card">
      <header className="card-header">
        <p className="card-header-title" id="toggle_shown">
          Card header
        </p>
        <button className="card-header-icon" aria-label="more options">
          <span className="icon">
            <i className="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </header>
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            src={thumbnail.path + "." + thumbnail.extension}
            alt="hero thumbnail"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                src={thumbnail.path + "." + thumbnail.extension}
                alt="Main hero image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <a href={urls[0].url}>Details</a>
            <br />
            <a href={comics.collectionURI}>Comics</a>
          </div>
        </div>

        <div className="content">{description}</div>
        <footer className="card-footer">
          <button href="#" className="card-footer-item">
            Team Up!
          </button>
          <button href="#" className="card-footer-item">
            Dismiss
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Cards;
