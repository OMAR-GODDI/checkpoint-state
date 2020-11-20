import './App.css';
import React, { Component } from 'react';



class App extends Component {
  state = {
  
          imgSrc: "https://image.freepik.com/free-vector/man-profile-cartoon_18591-58482.jpg",
            name: "Omar Goddi",
            profession: "web developer",
            age: 27,
            email: "gd.omar@hotmail.com",
            address:"Nabeul",
            isLoading:true,
            otherLoding: true
            
          
  };
  
handleShow =()=>this.setState({isShow :!this.state.isShow});
componentDidMount(){
  setInterval(()=>this.setState({isLoading: false }), 2500);
  
  
}



  render() {
    if (this.state.isLoading) {
      return <h1>loading......</h1>
     {
     
        
      }
      
    }
    
    return (
      <div>
        <h1 className="my-profile" > My profile</h1>
    <button class="btn btn-primary btn-lg" onClick={()=>this.handleShow()} > {this.state.isShow ? "Hide" : "Show"}{" "}</button>   
        {this.state.isShow ? (
      <div>
      <img  className="avatar"  src={this.state.imgSrc} width="350" height="350"  />
      <div className="user-card">
      <h2> FullName : {this.state.name}</h2>
      <h2> Profession : {this.state.profession}</h2>
      <h2> Age : {this.state.age}</h2>
      <h2> Email: {this.state.email}</h2>
      <h2> Address : {this.state.address}</h2>  
      </div>
      </div>
        ) : null } 
          
      </div>
    );
  }
}

export default App;