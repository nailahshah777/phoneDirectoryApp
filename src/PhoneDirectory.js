import React,{Component} from 'react';
import AddSubscribers from './AddSubscribers';
import Showsubscriber from './Showsubscriber';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

class PhoneDirectory extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
        subscriberList:[{
            id:1,
            name:'saliha',
            phone:9999999
        },
    {id:2,
    name:'yusrah',
    phone:8888888
    }]
        }
        
    }
    deleteHandlerClick=(id)=>{
        
    let list=this.state.subscriberList
     list.forEach((elem,index)=>{
         if(elem.id===id)
         {
             list.splice(index,1)
         }
     })
     this.setState({subscriberList:list})
        
    }
    
    addSubscriberHandler=(newsubscriber)=>{
    let subscriberList=this.state.subscriberList
      if(subscriberList.length>0)
    {
    
      newsubscriber.id=subscriberList[subscriberList.length-1].id+1;
    }
    else

    {
        newsubscriber.id=1;
    }
      subscriberList.push(newsubscriber)
      this.setState({subscriberList:subscriberList})
        }
    render()
    {    
    return(<>

    <Router>
    <Routes>
        <Route exact path="/add" 
element={
<AddSubscribers addsubscribers={this.addSubscriberHandler}/>}>
            </Route>

<Route exact path="/" element={<Showsubscriber listis={this.state.subscriberList} deleteHandlerClick={this.deleteHandlerClick.bind(this)}/>}></Route>
</Routes>
</Router>
</>

)
    }
}
export default PhoneDirectory