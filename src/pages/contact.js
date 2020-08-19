import React, { Component } from 'react';
import axios from 'axios';
import AnimatedLogo from '../components/AnimatedLogo/AnimatedLogo';

import '../components/AnimatedLogo/animatedLogo.scss';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: '',
          email: '',
          message: ''
        }
      }
    
      handleSubmit(e){
        e.preventDefault();
        axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data:  this.state
        }).then((response)=>{
          if (response.data.status === 'success'){
            alert("Message Sent."); 
            this.resetForm()
          }else if(response.data.status === 'fail'){
            alert("Message failed to send.")
          }
        })
      }
    
      resetForm(){
        
         this.setState({name: '', email: '', message: ''})
      }
      
      render() {
        return(
          <div>
          <div className='body-container'>
              <h1 className="slide">
                  Send me a Message
              </h1>
          <form id="contact-form" className='fade-in' onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" className="form-control col-6" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control col-6" id="email" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea className="form-control col-6" rows="4" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="btn btn-primary">Email Me</button>
          </form>
          </div>
          <AnimatedLogo/>
          </div>
        );
      }
    
      onNameChange(event) {
        this.setState({name: event.target.value})
      }
    
      onEmailChange(event) {
        this.setState({email: event.target.value})
      }
    
      onMessageChange(event) {
        this.setState({message: event.target.value})
      }
    }
export default Contact