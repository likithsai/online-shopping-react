//  Footer.js
import React from 'react';

const Footer = (props) => {
    return (
        <footer className="py-5 bg-dark">
            <div className="container">
                <div class="d-flex flex-wrap justify-content-between align-items-center">
                    <p class="col-md-4 mb-0 text-white">© 2022 Company, Inc</p>
                    <ul class="nav col-md-4 justify-content-end">
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-2 text-white">About</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;