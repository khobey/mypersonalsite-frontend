import React, { Component } from 'react';
import "../css/styles.css";

class Interests extends Component {
    render() {
        return (
            <section class="page-section bg-primary text-white mb-0" id="interests">
                <div class="container">

                    <div class="text-center">
                        <h2 class="page-section-heading d-inline-block text-grayish">INTERESTS AND HOBBIES</h2>
                    </div>

                    <div
                        className="video"
                        style={{
                            position: "relative",
                            paddingBottom: "56.25%",
                            paddingTop: 25,
                            height: 0
                        }}
                    >
                        <iframe
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%"
                            }}
                            src={`https://www.youtube.com/embed/DzRyYsWTvXc`}
                            frameBorder="0"
                        />
                    </div>
                </div>
            </section>
        );
    }
}

export default Interests;