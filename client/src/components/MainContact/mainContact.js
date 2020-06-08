import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Modal from '../Modal/Modal';
import * as emailjs from 'emailjs-com';
import './mainContact.css';


const contact = <FontAwesomeIcon icon={faPaperPlane} />

class MainContact extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        body: '',
        show: false
    };

    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = e => {
        e.preventDefault();
        emailjs.sendForm(
            'gmail',
            'web_dynamic',
            '.contact-form',
            'user_pVb1bjpUPqzh9Bx263MXg'
        )
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        this.setState({
            name: '',
            phone: '',
            email: '',
            body: '',
            show: true
        })

    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div className='contactContainer'>

                {this.state.show ? (
                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <h4>Message sent! Thank you for your inquiry.</h4>
                    </Modal>
                ) : (
                        null
                    )}

                <h1 className='contactHeader'>Contact Web Dynamic</h1>
                <form onSubmit={this.handleFormSubmit}
                    className="contact-form">
                    <div className='contactItemContainer'>
                        <input className='inputName'
                            type='text'
                            name='name'
                            value={this.state.name}
                            placeholder='Name'
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br />
                    <div className='contactItemContainer'>
                        <input className='inputPhone'
                            type='text'
                            name='phone'
                            value={this.state.phone}
                            placeholder='Phone'
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br />
                    <div className='contactItemContainer'>
                        <input className='inputEmail'
                            type='text'
                            name='email'
                            value={this.state.email}
                            placeholder='Your Email'
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br />
                    <div className='contactItemContainer'>
                        <textarea className='inputMessage'
                            type='text'
                            name='body'
                            value={this.state.body}
                            placeholder='Message'
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <br />
                    <button className='contactButton' type='submit'>{contact}</button>
                </form>
            </div>
        )
    }
}

export default MainContact;