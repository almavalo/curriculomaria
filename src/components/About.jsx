import React from 'react';

const About = ({ addres, avatar, bio, email, name, phone, profession, social }) => (
    <div className="About">
        <div className="About-container">
            <div className="About-avatar">
                <figure>
                    <img src={avatar} alt={name} />
                </figure>
            </div>
            <div className="About-name">
                <h2>{name}</h2>
                <p>{profession}</p>
            </div>
            <div className="About-bio">
                <p>{bio}</p>
            </div>
            <div className="About-email">
                <h4>Email: {email}</h4>
            </div>
            <div className="About-phone">
                <h4>Telefono: {phone}</h4>
            </div>
            <div className="About-addres">
                <h4>{addres}</h4>
            </div>
            <div className="About-social">
                social
            </div>
        </div>

    </div>
);

export default About;