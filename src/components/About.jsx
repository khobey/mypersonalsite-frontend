import React, { Component } from 'react';
import "../css/styles.css";

class About extends Component {
    render() {
        return (
            <div id="about">
                <section class="page-section portfolio" id="portfolio">
                    <div class="container">
                        <div class="text-center">
                            <h2 class="page-section-heading text-secondary mb-0 d-inline-block">Who I am and What I do</h2>
                        </div>
                        <div class="divider-custom">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        <div class="row justify-content-center">
                            <p>I'm a software engineer since 2013. The never-ending cycle of innovations and new tech in my field excites me. There's always a lot to learn! I love working in various fields in my profession. I've been a C++ and Java backend developer, and a scrum master. I have experience in information security and cloud development. I also participate in process improvement efforts. I've tried my hands on solution design and leading feature developments. Still has a lot to learn and discover! </p>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}
export default About;