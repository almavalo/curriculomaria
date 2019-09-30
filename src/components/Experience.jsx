import React from 'react';

const Experience = props => (
    <div className="Experience">
        <div className="Experience-container">
            {props.data.map((exp,index) => (
                <div className="Experiencie-item" key={`Exp-${index}`}>
                    <h2>{exp.company} - {exp.jobData}</h2>
                    <h3>{exp.jobClient}</h3>
                    <p>{exp.jobDescription}</p>
                    <h3>Cargo Ocupado: {exp.jobPosition}</h3>
                    <p>{exp.jobTechnology}</p>
                </div>
            ))}
        </div>
    </div>
);

export default Experience