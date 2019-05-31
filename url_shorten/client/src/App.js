import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Component} from 'react'
import axios from 'axios';
import validator from 'validator';


class App extends Component {
    state = {
        url: '',
        link:'',
    }

    handleChange =(event) => {
        // console.log(event.target.value)
        this.setState({url:event.target.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const validURL = validator.isURL(this.state.url,{require_protocol:true});//user needs to add the http:// ... protocol
        if(!validURL){
            alert(`Please make sure the url is correct and has the http:// protocol`)
        } else{
            console.log(`URL is:` , this.state.url)
            //POST ALL The values
            axios.post('http://localhost:9000/api/shorten',{
                url:this.state.url
            })
                .then((res =>{
                    console.log(res.data.hash);
                    this.setState({link:`http://localhost:9000/${res.data.hash}`})
                }))
        }


    }
    render() {
        return (
            <div className = "App">
                <form onSubmit = {this.handleSubmit}>
                    <fieldset>
                        <input
                            type="text"
                            name = "url"
                            placeholder = "Enter full URL (include http://)"
                            onChange = {this.handleChange}
                            />
                        <input type="submit" value = "Get Shortened URL"/>
                    </fieldset>
                    <fieldset>
                        <span id = "result"> Your Shortened Link:{this.state.link}</span>
                        {/* The state gets updated when we send the url to server and response is put on the link variable and displayed here */}
                    </fieldset>
                </form>



            </div>
        );
    }
}




export default App;