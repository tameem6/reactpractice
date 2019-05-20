import React from 'react';

const Heroes = ({heroes}) => {    
        const heroList = heroes.map( hero => {
            return (
                    <li className="heroes" key = {hero.id}>
                        <div>Name : {hero.name}</div>
                        <div>Attack : {hero.attack}</div>
                        <div>Position : {hero.position}</div>
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