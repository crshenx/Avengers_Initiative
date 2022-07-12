import React, { useState } from 'react'

function Cards({ hero }) {
  const {name, thumbnail, description, urls, comics, resourceURI} = hero

  const [showCard, setShowCard] = useState(true)

  function handleShown() {
    setShowCard(!showCard)
  }


  console.log(hero)

  return (
<div className='media-content'>
    <div className={showCard ? "" : "hidden"}>
        <div className="card">
            <header class="card-header"  onClick={handleShown}>
            <p class="card-header-title" id="toggle_shown">
            Hide Hero
            </p>
            <button class="card-header-icon" aria-label="more options">
            <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
            </button>
        </header>
        <div className="card-image" >
            <figure className="image is-4by3">
            <img src={thumbnail.path + "." + thumbnail.extension} alt="hero thumbnail"/>
            </figure>
        </div>
        <div className="card-content">
            <div className="media">
            <div className="media-left">
                <figure className="image is-48x48">
                <img src={thumbnail.path + "." + thumbnail.extension} alt="Main hero profile pic"/>
                </figure>
            </div>
            <div className="media-content">
                <p className="title is-4">{name}</p>
                <a href={urls[0].url}>Details</a>
                <br/>
                <a href={comics.collectionURI}>Comics</a>
            </div>
            </div>

            <div className="content">
                {description !== "" ? description : "No Description Available, Click the details link for more information about his hero"}
            </div>
            <footer class="card-footer">
            <button href="#" class="card-footer-item">Team Up!</button>
            <button href="#" class="card-footer-item">Dismiss</button>
        </footer>
        </div>
        </div> 
    </div>
</div>
  )
}

export default Cards