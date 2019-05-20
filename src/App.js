import React from 'react';
import Heroes from './Heroes.js';
import AddHero from './AddHero.js';

class App extends React.Component {
     state = {
      heroes : [
        {name : 'Rylai', attack : 'Ranged', position : 5, id : 1},
        {name : 'Stygwyr', attack : 'Melee', position : 2, id : 2 },
        {name : 'Trax', attack : 'Ranged', position : 1, id : 3}
      ]
    }
    addHero = (hero) => {
      hero.id = Math.random();
      let newHeroes = [...this.state.heroes, hero];
      this.setState({
        heroes : newHeroes
      });
    }
  render()
  {
    return (
      <div className="App">
          <Heroes heroes= {this.state.heroes} />
          <AddHero addHero = {this.addHero}/>
      </div>
    );
  }
}

export default App;
