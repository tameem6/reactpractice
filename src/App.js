import React from 'react';
import Heroes from './Heroes.js';
import AddHero from './AddHero.js';

class App extends React.Component {
     state = {
      count : -1,
      heroes : []
    }
    addHero = (hero) => {
      
      hero.id = this.state.count+1;
      let newHeroes = [...this.state.heroes, hero];
      this.setState({
        heroes : newHeroes,
        count : this.state.count+1
      }, () => {console.log(this.state.heroes)});
      
    }
    deleteHero = (id) =>{
      let newHeroes = this.state.heroes.filter(hero => {
          return hero.id !== id
      });
      this.setState({
        heroes : newHeroes
      })
    }
    handleClick = (e)=> {
      console.log(e);
      let c = this.state.heroes.length/2;
      if(c%2 !== 0 )
      {
        alert("List is not perfectly balanced as all things should be");
      }
      else
      {
        let newHeroes = [];
        let j=0;
        for(let i=0; i<this.state.heroes.length; i++)
        {
          let m = Math.floor(Math.random()*c*2);
          //console.log(m);
          if(this.state.heroes[i].id === m)
            continue;
          else
            newHeroes[j++] = this.state.heroes[i];
        }
        this.setState({
          count : c,
          heroes : newHeroes
        })
      }
    }
    componentDidMount()
    {
      console.log('Component mounted');    
    }
      render()
  {
    return (
      <div className="App container">
          <Heroes heroes= {this.state.heroes} deleteHero = {this.deleteHero} handleClick= {this.handleClick}/>
          <AddHero addHero = {this.addHero}/>
      </div>
    );
  }
}

export default App;
