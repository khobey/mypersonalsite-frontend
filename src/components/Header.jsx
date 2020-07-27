import React, { Component } from 'react';
import "../css/styles.css";

class Header extends Component {
    render() {
        return(
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <img class="rounded-circle" src={require('../img/profpic.jpg')} alt="" height="25%" width="25%"/>
                <br/>

                <h1 class="masthead-heading mb-0">Hi, I'm ANA TAROY</h1>

                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <p class="pre-wrap masthead-subheading font-weight-light mb-0">SOFTWARE ENGINEER. BAKER. CAT BUTLER.</p>
            </div>
        </header>
        );
    }
}
export default Header;