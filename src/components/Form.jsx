import React, {useState} from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { getYearDifference, calculateBrand, getPlan } from '../helpers';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFFFFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = ({setResume, setLoading}) => {
    const [ data, setData ] = useState({
        brand: '', year: '', plan: ''
    });

    let { brand, year, plan } = data;

    const [error, setError] = useState(false);

    // Read data from the Form and set them on the state
    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        let result = 2000;

        let yearDifference = getYearDifference(year);
        
        result -= ((yearDifference* 3) * result) / 100;
        
        result = calculateBrand(brand) * result;
        
        const planIncrement = getPlan(plan);

        result = parseFloat( planIncrement * result).toFixed(2);

        setLoading(true);

        setTimeout(() => {
            setResume({
                quotation: result,
                data
            });
            setLoading(false);
        }, 3000);
        
    }

    const initBrands = [{ id: 1, value: 'american'}, { id: 2, value: 'european'}, { id: 3, value: 'asian'}];
        
    let initYears = [];
    const currentYear = parseInt(new Date().getFullYear());
    for(let i = currentYear+2; i>=2012; i--){
        initYears.push({id: i, value: i});
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            { error ? <Error>All fields are required.</Error>: null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option value="">-- Seleccione --</option>
                    { initBrands.map( initBrand => (
                        <option key={initBrand.id} value={initBrand.value}>{initBrand.value}</option>
                    )) }
                </Select>
            </Field>
            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getData}
                >
                    <option value="">-- Seleccione --</option>
                    { initYears.map( initYear => (
                        <option key={initYear.id} value={initYear.value}>{initYear.value}</option>
                    ))}
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="basic"
                        checked={plan === 'basic'}
                        onChange={getData}
                    /> Basic
                </label>
                <label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="complete"
                        checked={plan === 'complete'}
                        onChange={getData}
                    /> Complete
                </label>
            </Field>
            <Button type="submit">Submit</Button>
        </form>
     );
}

Form.propTypes = {
    setResume: PropTypes.func.isRequired,
    setLoading: PropTypes.func.isRequired
}

export default Form;