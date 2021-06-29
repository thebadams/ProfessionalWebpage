import React  from 'react';

const PortfolioContent = () => {
  return (
    <div className="container text-center">
      <h1 className="display-3">Portfolio</h1>
      <div className="row my-4 justify-content-around">
        <div className="card col-12 col-lg-5 my-3 mx-1">
          <img src="./assets/images/pokemon-deck-builder/pokemon-deck-builder.png" className="card-img-top my-3" alt="PokemonDeckBuilder" />
          <div className="card-body">
            <h5 className="card-title">Pokemon Deck Builder</h5>
            <p className="card-text">A Web Application using Express, MySQL, and Node.js on the back end, and styled using Materialize CSS on the front-end. Enables users to search for Pokemon Cards, using th ePokemon TCG SDK, and add it to their own collections</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioContent;
