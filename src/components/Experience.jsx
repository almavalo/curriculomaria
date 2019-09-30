import React from 'react';
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';
import H2Degree from '../styled/H2Degree';
import LineaHr from '../styled/LineaHr';


const Experience = props => (
    <div className="Experience">
        <H2Styled name="Experiencia" />
        <div className="Experience-container">
            {props.data.map((exp,index) => (
                <div className="Experiencie-item" key={`Exp-${index}`}>
                    <LineaHr/>
                    <H2Degree>{exp.company} - {exp.jobDate}</H2Degree>
                    <H3Styled>{exp.jobClient}</H3Styled>
                    <PStyled>{exp.jobDescription}</PStyled>
                    <H3Styled>Cargo Ocupado:</H3Styled>
                    <PStyled>{exp.jobPosition}</PStyled>
                    <H3Styled>Herramientas Usadas:</H3Styled>
                    <PStyled>{exp.jobTechnology}</PStyled>
                </div>
            ))}
        </div>
    </div>
);

export default Experience;