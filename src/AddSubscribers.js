import React,{Component} from 'react';
import Header from './Header.js';
import './common/common.css';
import PhoneDirectory from './PhoneDirectory.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {withRouter} from './withRouter'
class AddSubscribers extends Component{
    constructor(props)
    {
        super(props)
        this.state={phone:'',
        name:'',
    
    }
    }
    handleInput=(e)=>{
        this.setState({[e.target.name]:e.target.value});
    }
    onFormSubmitted=(e)=>{
        e.preventDefault();
        this.props.addsubscribers(this.state)
    }
    componentDidMount()
    {
        console.log(this.props)
    }
    render()
    {
       
        return(<div>
<Header myheader="Add Subscriber"/>
<div className='btn-container'>
<Link to="/">
<button className='btn btn-warning'>Back</button>    
</Link>
</div>
<div className="myform">
 <form onSubmit={this.onFormSubmitted.bind(this)}>
<label htmlFor="name">Name</label>  
<input type="text" onChange={this.handleInput} id="name" name="name" placeholder="Type here.."/><br/><br/>
<label htmlFor="phone">Phone </label>
<input type="number" onChange={this.handleInput} id="phone" name="phone" placeholder="Type here.."/>  
<h1>Subscriber to be added</h1> 

<div>
 <span>Name: {this.state.name}</span><br/><br/> 
 <span>Phone: {this.state.phone}</span><br/><br/>
</div>

<button type="submit" className="btn btn-warning">Add Subscriber</button>
</form>
</div>
</div>)
    }
}
export default withRouter(AddSubscribers)