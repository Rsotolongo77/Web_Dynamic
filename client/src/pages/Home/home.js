import React, { Component } from "react";
import NavBar from '../../components/NavBar/navBar';
import SideNav from '../../components/SideNav/sideNav';
import BackDrop from '../../components/Backdrop/backDrop';

class Home extends Component {
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
                <main>

                </main>
            </div>
        );
    }
}

export default Home;