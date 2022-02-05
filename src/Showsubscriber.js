import React, { Component } from 'react';
import Header from './Header';
import './common/common.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
class Showsubscriber extends Component {
  constructor(props)
  {
    super(props)
    
  }
  deleteHandler(id)
  {
    this.props.deleteHandlerClick(id)
  }
  
  render() {
    
    return(
  <div className="App">
  <Header myheader="PHONE DIRECTORY"/>
  <div className="btn-container">
    <Link to="/add">
  <button type="button" className='btn btn-success'>Add</button>
  </Link>
  </div>
        <div className='row header-names'>
          <span className="col-4">Name</span><br/>
          <span className='col-4'>Phone</span>
        </div>
        <hr/>
        {
          this.props.listis.map((sub,index)=>{
            {console.log("subscriber",sub)}
            return(
              
            <div className='row subscriber' key={index+1}>
            <span className="col-4">{sub.name}</span><br/>
            <span className='col-4'>{sub.phone}</span>
          <span className="col-4"><button className='btn btn-danger' onClick={this.deleteHandler.bind(this,sub.id)}>DELETE</button></span>
          </div>
            )
          })


        }
      </div>
    );
  }

}
export default Showsubscriber
