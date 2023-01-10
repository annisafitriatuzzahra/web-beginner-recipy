import React, { Component } from "react";
import './footer.css';
import FooterCol from "./footerCol";


export default function Footer(){
    return(
        <div className="footer">
            <div className="container">
                <div className="col1">
                    <h1>Recipy</h1>
                    <p>A website website that provides a variety of 
                        recipes from various countries. Anyone can get the 
                        recipe they need just by entering the keyword.</p>
                </div>
                <div className="col2">
                    <FooterCol
                        heading="Contact Info"
                        link={[
                            {
                                title: '+62812345679',
                                href: 'tel:+62812345679'
                            },
                            {
                                title: 'recipy@gmail.com',
                                href: 'mailto:recipy@gmail.com'
                            },
                            {
                                title: 'Jakarta, Indonesia.',
                                href: 'http://google.com/maps'
                            },
                        ]}
                    />
                </div>
                <div className="col3">
                    <FooterCol
                        heading="Social Media"
                        link={[
                            {
                                title: 'Facebook',
                                href: 'http://facebook.com'
                            },
                            {
                                title: 'Instagram',
                                href: 'http://google.com'
                            },
                            {
                                title: 'Twitter',
                                href: 'http://google.com'
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="cr">
                <p>© 2022 • Recipy </p>
            </div>
        </div>
    )
}