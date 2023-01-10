import React from "react";
import { Link } from "react-router-dom";
import './footerCol.css'

export default function FooterCol({
    heading = 'col heading',
    link = [
        {
            type: 'Links',
            title: 'Home',
            href: '/home'
        },
        {
            type: 'Links',
            title: 'About',
            href: '/about'
        }
    ]
}){
    return (
        <div className="footerCol">
            <h1 className="heading">{heading}</h1>
            <ul>
                {link.map((item, index) => (
                        <li key={index}>
                            {item.type === 'Link' ? (
                                <Link to = {item.href}>{item.title}</Link>
                            ) : (
                                <a href={item.href} target="_blank" rel="noreferrer">
                                    {item.title}
                                </a>
                            )}
                        </li>
                ))}
            </ul>
        </div>
    )}