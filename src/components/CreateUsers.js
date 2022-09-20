import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUsers extends Component {

  state  ={
    user: [],
    nombre: ''
  }  
  
  async componentDidMount() {
      const res = await axios.get('http://localhost:4000/api/users');
      this.setState({user: res.data});
      console.log(this.state.user);
    } 

    onChangeUsername = (e) => {
        this.setState({
          nombre: e.target.value
        })
    }

  render() {
    return (
      <div className='row'>
        <div className="col-md-4">
            <div className="card card-body">
              <h3>Registrarse</h3>
              <form>
               <div className="form-group">
                <input 
                type="text" 
                className='form-control' 
                onChange={this.onChangeUsername}/>
               </div>
              </form>
            </div>
        </div>
        <div className="col-md-8">
          <ul className="list-group">
            {
              this.state.user.map(user => <li className='list-group-item list-group-item-action' key={user._id}>
                {user.nombre}
              </li>)
            }
          </ul>

        </div>
      </div>
    )
  }
}