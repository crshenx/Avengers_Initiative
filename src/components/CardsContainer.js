
import React from 'react'
import Cards from './Cards'
import "./Cards.css"


function CardsContainer({ heroes, handleTeamUp }) {
  // const heroData = heroes.data.results
  // console.log(heroes)

  return (

    <div  className="cardContainer">
        {heroes.map(hero => (
          <Cards 
            key={hero.id}
            hero={hero}
            handleTeamUp={handleTeamUp}
            // image={hero.thumbnail}
            // filetype={hero.extension}
            
          />
        ))}

    </div>
  );
}

export default CardsContainer;
