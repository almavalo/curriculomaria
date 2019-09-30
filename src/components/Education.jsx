import React from 'react';

const Education = props => (
    <div className="Education">
        <div className="Education-container">
            {props.data.map((edu, index) => (
                <div className="Education-item" key={`Edu-${index}`}>
                    <h2>{edu.degree} - {edu.startDate}</h2>
                    <h3>{edu.institution}</h3>
                </div>
            ))}
        </div>
    </div>
);

export default Education;