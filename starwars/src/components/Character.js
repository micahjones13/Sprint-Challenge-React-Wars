import React from 'react';


//need props to pass down data from CharacterList that is looping through the array

const Character = (props) => {

    return (
        <div className = 'character-card'>
            <h3>{props.item.name}</h3>
            <p>Birth Year: {props.item.birth_year} | Height: {props.item.height}</p>
            <p>Eye Color: {props.item.eye_color} | Hair Color: {props.item.hair_color}</p>
        </div>
    );
}

export default Character;