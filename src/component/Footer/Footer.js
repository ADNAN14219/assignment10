import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark footer">
            <div className="row">
                <div className="col-6">
                    <img className="footer-icon" src="" alt="" />
                </div>
                <div className="col-3">
                    <p>About Health care</p>
                    <p>Read our blogs</p>
                </div>
                <div className="col-3">
                    <p>About Departments</p>
                    <p>Read our articles</p>
                </div>
            </div>
            <div className="row">
                <div className="col-8">
                    <p className="text-start">© All Rights Reserved To Adnan 2021</p>
                </div>
                <div className="col-2">
                    <p> Privacy Policy</p>
                </div>
                <div className="col-2">
                    <p>Terms and condition</p>
                </div>
            </div>

        </div>
    );
};

export default Footer;