import React from 'react';
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 3px solid #E91E63;
    box-shadow: 0 0 5px rgba(0,0,0,0.6);
    display: block;
    margin: 0 auto;
`;

const AboutName = styled.div`
    text-align:center;
`;

const AboutH2 = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin: .5em 0 0 0;
    color: #c2185b;
`;

const AboutProfession = styled.p`
    margin: .2em 0 1em 0;
    letter-spacing: 1.6px;
    font-weight: bold;
    color: #c2185b;
`;

const AboutGeneral = styled.h4`
    color: #757575;
    font-size: 1em;
    font-weight: 400;
`;

const AboutBio = styled.p`
    color: #757575;
    font-size: 1em;
    font-weight: 300;
    line-height: 1.5em;
`;

const About = ({ addres, avatar, bio, email, name, phone, profession, social }) => (
    <AboutStyle>
        <div className="About-container">
            <AboutAvatar>
                <figure>
                    <AboutImg src={avatar} alt={name} />
                </figure>
            </AboutAvatar>
            <AboutName>
                <AboutH2>{name}</AboutH2>
                <AboutProfession>{profession}</AboutProfession>
            </AboutName>
            <div className="About-bio">
                <AboutBio>{bio}</AboutBio>
            </div>
            <div className="About-email">
                <AboutGeneral>Email: {email}</AboutGeneral>
            </div>
            <div className="About-phone">
                <AboutGeneral>Telefono: {phone}</AboutGeneral>
            </div>
            <div className="About-addres">
                <AboutGeneral>{addres}</AboutGeneral>
            </div>
            <div className="About-social">
                <Social social={social}/>
            </div>
        </div>
    </AboutStyle>
);

export default About;