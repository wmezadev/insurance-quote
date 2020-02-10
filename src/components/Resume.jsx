import React  from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { capitalize } from '../helpers';

const ResumeContainer = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`
const Resume = ({ data }) => {
    const { brand, year, plan } = data;

    if(brand === '' || year === '' || plan === '') {
        return null;
    }

    return (
        <ResumeContainer>
            <h2>Quotation Resume</h2>
            <ul>
                <li>Brand: {capitalize(brand)}</li>
                <li>Plan: {capitalize(plan)}</li>
                <li>Year: {year}</li>
            </ul>
        </ResumeContainer>
     );
}

Resume.propTypes = {
    data: PropTypes.object.isRequired
}

export default Resume;