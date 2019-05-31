import React from 'react';
import Character from './Character.js';


//loop through the array of characters, put the info into specific places and display them.
//pass down necessary data through props attribuites on <Character />
const CharacterList = (props) => {
    return (
        <div className = 'character-list-container'>
            <h2 >Characters</h2>
            <div className = 'characters'>
            {
                props.starwarsChars.map(item => {
                    return (
                        <Character
                         item = {item}
                         key = {item.created}
                        />
                    );
                })
            }
            </div>
        </div>
    )
}


export default CharacterList;