import React from 'react';

const Certificates = props => (
    <div className="Certificates">
        <div className="Certificates-container">
            {props.data.map((cert,index) => (
                <div className="Certificates-item" key={`Cert-${index}`}>
                    <h2>{cert.degree} - {cert.startDate}</h2>
                    <h3>{cert.institution}</h3>
                </div>
            ))}
        </div>
    </div>
);

export default Certificates;