import React from 'react';
import GameCard from "./GameCard";
import PropTypes from 'prop-types';
// import Featured from  './Featured'

//functional component
const GameList = ({games,toggleFeatured})=>(
<div className="ui four cards">
    { games.length ===0 ? (
            <div className= "ui icon message">
                <div className="header"> no data
                    <p> add som data</p>
                </div>
            </div>
        )
        :(games.map(game=> <GameCard game={game} key={game.id}
                                     toggleFeatured = {toggleFeatured}
        />))
        }
</div>
);

GameList.propTypes = {
    games : PropTypes.arrayOf(PropTypes.object).isRequired
};

GameList.defaultProps = {
    games : []
};

export default GameList;
