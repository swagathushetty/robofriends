import React,{Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
// import {robots} from './robots'

import './App.css'



class App extends Component { 
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }  

    //we used arrow functions to set this to the class instance
    //since the functions runs inside of SearchBox it refers to the input
    //so use arrrow functions to retain this binding
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value})
        console.log(event.target.value)        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            return response.json()
        })
        .then((users)=>{
            this.setState({robots:users})
        })
    }

    render(){
        const {robots,searchField}=this.state
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase())
        })

        if(!robots.length){
            return <h1>Loading</h1>
        }else {
            return (
                <div className="tc">
                    <h1 className="f1">Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                    <CardList robots={filteredRobots} />
                    </Scroll>
                </div>


            )

        }
        
    }

}

export default App