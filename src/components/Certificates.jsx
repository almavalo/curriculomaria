import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Degree from '../styled/H2Degree';
import LineaHr from '../styled/LineaHr';

const Certificates = props => (
    <div className="Certificates">
    <H2Styled name="Certificados" />
    <LineaHr/>
        <div className="Certificates-container">
            {props.data.map((cert,index) => (
                <div className="Certificates-item" key={`Cert-${index}`}>
                    <H2Degree>{cert.degree} - {cert.startDate}</H2Degree>
                    <H3Styled>{cert.institution}</H3Styled>
                </div>
            ))}
        </div>
    </div>
);

export default Certificates;