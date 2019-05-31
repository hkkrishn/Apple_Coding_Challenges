import React, { Component } from 'react'
import PostData from '../data/navigation.json'
import Clock from 'react-live-clock';
import './Posts.css'
import logo from './logo.png'

class Posts extends Component {

    constructor(){
        super()
        this.first = React.createRef();
        this.other= React.createRef();
    }
    state = {
        active: false,
        time:''
    };
    handleClick =(event)=>{
        let x = this.first.current
        let y = this.other.current
        event.preventDefault();
        console.log('hello')
        let currstate = this.state.active
        this.setState({
            active:!currstate
        })
        console.log(x.offsetLeft)
        console.log(y.offsetLeft)
    }

    render() {

        return (
            <div className = "container center">
                {PostData.cities.map((city,index)=>{
                    if(index === 0){
                        return <div key ={index} className = "nav_item_one" ref={this.first} onClick ={this.handleClick}>
                            <a href="/">{city.label}</a>
                        </div>
                    } else{
                        return <div key ={index} className={this.state.active ? 'nav_item': null}  onClick = {this.handleClick} ref ={this.other}>
                            <a href="/">{city.label}</a>
                        </div>
                    }
                })}
            </div>
        )}
}

export default Posts;