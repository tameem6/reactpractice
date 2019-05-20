import React from 'react';

const Heroes = ({heroes, deleteHero}) => {    
        const heroList = heroes.map( hero => {
            return (
                    <li className="heroes" key = {hero.id}>
                        <div>Name : {hero.name}</div>
                        <div>Attack : {hero.attack}</div>
                        <div>Position : {hero.position}</div>
                        <button onClick = {() => {deleteHero(hero.id)}}>Delete Hero</button> 
                    </li>
                )
                
        });
        return (
            <ul className="hero-list">
                {heroList}
            </ul>    
        );
}

export default Heroes;