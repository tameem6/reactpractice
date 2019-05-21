import React from 'react';

const Heroes = ({heroes, deleteHero, handleClick}) => {    
        const heroList = heroes.map( hero => {
            return (
                    <tr className="heroes" key = {hero.id}>
                        <td>{hero.name}</td>
                        <td>{hero.attack}</td>
                        <td>{hero.position}</td>
                        <td><button className="btn btn-outline-warning" onClick = {() => {deleteHero(hero.id)}}>Delete Hero</button></td>
                    </tr>
                )
                
        });
        return (
            <div>
            <table className="heroTable table table-dark table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Attack</th>
                        <th>Position</th>
                        <th>Delete?</th>
                    </tr>
                </thead>
                    <tbody>
                        {heroList}
                    </tbody>
            </table>
             <button className = "btn btn-outline-danger text-center" onClick= {() => {handleClick('works')}}>Snap!</button>
        </div>
        );
}

export default Heroes;