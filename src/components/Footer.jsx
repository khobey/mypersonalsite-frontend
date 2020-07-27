import React, { Component } from 'react';
import "../css/styles.css";

class Footer extends Component {
    render() {
        return (
        <div id="footerdiv">
            <footer class="footer text-center">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="mb-4">LOCATION</h4>
                            <p class="pre-wrap lead mb-0">Philippines</p>
                        </div>

                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <h4 class="mb-4">AROUND THE WEB</h4><a class="btn btn-outline-light btn-social mx-1" href="https://github.com/khobey"><i class="fab fa-fw fa-github"></i></a><a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/ana-t-7066a4b0"><i class="fab fa-fw fa-linkedin-in"></i></a>
                        </div>

                        <div class="col-lg-4">
                            <h4 class="mb-4">ABOUT THIS WEBSITE</h4>
                            <p class="pre-wrap lead mb-0">This website was created using React JS with BootStrap Theme Freelance as part of my effort to learn full stack development. This site will be updated. Check out my GitHub for more.</p>
                        </div>
                    </div>
                </div>
            </footer>

            <section class="copyright py-4 text-center text-white">
                <div class="container"><small class="pre-wrap">Copyright © anataroy 2020</small></div>
            </section>

            <div class="scroll-to-top d-lg-none position-fixed"><a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a></div>
        </div>
        );
    }
}

export default Footer;