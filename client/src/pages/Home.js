import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";

class Home extends Component {
    
    state = {

    }

render(){
        return (
            <div>
        <NavBar />
        <Jumbotron />
           </div>
        );
       }

}

export default Home;


