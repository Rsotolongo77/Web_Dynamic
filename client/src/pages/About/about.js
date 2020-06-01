import React, { Component } from 'react';
import NavBar from '../../components/NavBar/navBar';
import SideNav from '../../components/SideNav/sideNav';
import BackDrop from '../../components/Backdrop/backDrop';
import MainAbout from '../../components/MainAbout/mainAbout';
import Footer from '../../components/Footer/footer';
import './about.css';

class About extends Component {
    state = {
        toggleOpen: false
    };

    toggleHandler = () => {
        this.setState((prevState) => {
            return { toggleOpen: !prevState.toggleOpen }
        });
    };

    backDropClose = () => {
        this.setState({ toggleOpen: false })
    };

    render() {
        let backDrop;
        if (this.state.toggleOpen) {
            backDrop = <BackDrop click={this.backDropClose} />
        }
        return (
            <div style={{ height: '100vh' }}>
                <NavBar drawerClickHandler={this.toggleHandler} />
                <SideNav show={this.state.toggleOpen} />
                {backDrop}
                <main className='mainAbout'>
                    <MainAbout />
                </main>
                <Footer />
            </div>
        );
    }
}

export default About;