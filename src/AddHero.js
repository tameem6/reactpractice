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
                 <form className="text-center" onSubmit = {this.handleSubmit}>
                     <br />
                    <div className="form-group">
                        <label htmlFor="name">Name :</label><br />
                        <input type="text" id="name" onChange= {this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="attack">Attack type:</label><br />
                        <input type="text" id = "attack" onChange= {this.handleChange} />
                    </div>
                    <div className="form-group">
                         <label htmlFor="position">Position :</label><br />
                         <input type="text" id="position" onChange= {this.handleChange} />
                    </div>
                     <button className="btn btn-outline-dark"> Submit</button>
                 </form>
                 </div>
         )
     }
}

export default AddHero;