import React from 'react';

class AddHero extends React.Component{
    state = {
        name : null,
        attack : null,
        position : null
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addHero(this.state);
    }
    render()
     {
         return(
             <div>
                 <form onSubmit = {this.handleSubmit}>
                     <label htmlFor="name">Name :</label>
                     <input type="text" id="name" onChange= {this.handleChange} />
                     <label htmlFor="attack">Attack type:</label>
                     <input type="text" id = "attack" onChange= {this.handleChange} />
                     <label htmlFor="position">Position :</label>
                     <input type="text" id="position" onChange= {this.handleChange} />
                     <button> Submit</button>
                     
                 </form>
             </div>
         )
     }
}

export default AddHero;