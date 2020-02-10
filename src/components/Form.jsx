import React from 'react';
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
    const brands = ['american', 'european', 'asian'];

    let years = [];
    const currentYear = parseInt(new Date().getFullYear());
    for(let i = currentYear+2; i>=2012; i--){
        years.push(i);
    }

    return ( 
        <form>
            <Field>
                <Label>Marca</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    { brands.map( brand => (
                        <option value={brand}>{brand}</option>
                    )) }
                </Select>
            </Field>
            <Field>
                <Label>Year</Label>
                <Select>
                    <option value="">-- Seleccione --</option>
                    { years.map( year => (
                        <option value={year}>{year}</option>
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
                    /> Basic
                </label>
                <label>
                    <InputRadio 
                        type="radio"
                        name="plan"
                        value="Complete"
                    /> Complete
                </label>
            </Field>
            <Button type="button">Submit</Button>
        </form>
     );
}
 
export default Form;