import React from 'react';
import Heroes from './Heroes.js';
import AddHero from './AddHero.js';

class App extends React.Component {
     state = {
      count : 0,
      heroes : []
    }
    addHero = (hero) => {
      hero.id = this.state.count+1;
      let newHeroes = [...this.state.heroes, hero];
      this.setState({
        heroes : newHeroes,
        count : this.state.count+1
      });
    }
    deleteHero = (id) =>{
      let newHeroes = this.state.heroes.filter(hero => {
          return hero.id !== id
      });
      this.setState({
        heroes : newHeroes
      })
    }
    componentDiMagna()
    {
      console.log('Component mounted');    
    }
      render()
  {
    return (
      <div className="App container">
          <Heroes heroes= {this.state.heroes} deleteHero = {this.deleteHero} />
          <AddHero addHero = {this.addHero}/>
      </div>
    );
  }
}

export default App;
