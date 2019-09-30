import React from 'react';
import styled from 'styled-components';

const HrLinea = styled.hr`
    height: 1px;
    background-color: #e91e63;
`;

const LineaHr = ({ name }) => <HrLinea>{name}</HrLinea>;

export default LineaHr;