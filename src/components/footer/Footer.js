import React from 'react';
import './Footer.scss'


function Footer(props) {

    return (
        <div className="footer">
            <p className="footer-item">
                © {(new Date().getFullYear())} {props.name} | All Rights Reserved
            </p>
        </div>
    )
}

export default Footer