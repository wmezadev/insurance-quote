import React, {useState} from 'react';
import styled from '@emotion/styled';

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

const Form = () => {
    const [ data, setData ] = useState({
        brand: '', year: '', plan: ''
    });

    const { brand, year, plan } = data;

    // Read data from the Form and set them on the state
    const getData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const initBrands = [{ id: 1, value: 'american'}, { id: 2, value: 'european'}, { id: 3, value: 'asian'}];
        
    let initYears = [];
    const currentYear = parseInt(new Date().getFullYear());
    for(let i = currentYear+2; i>=2012; i--){
        initYears.push({id: i, value: i});
    }

    return ( 
        <form>
            <Field>
                <Label>Marca</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getData}
                >
                    <option value="">-- Seleccione --</option>
                    { initBrands.map( initBrand => (
                        <option key={initBrand.id} value={initBrand.id}>{initBrand.value}</option>
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
                        <option key={initYear.id} value={initYear.id}>{initYear.value}</option>
                    ))}
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="Basic"
                        checked={plan === 'Basic'}
                        onChange={getData}
                    /> Basic
                </label>
                <label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="Complete"
                        checked={plan === 'Complete'}
                        onChange={getData}
                    /> Complete
                </label>
            </Field>
            <Button type="button">Submit</Button>
        </form>
     );
}
 
export default Form;