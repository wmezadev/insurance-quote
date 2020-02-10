import React from 'react';

const Form = () => {
    const brands = ['american', 'european', 'asian'];

    let years = [];
    const currentYear = parseInt(new Date().getFullYear());
    for(let i = currentYear+2; i>=2012; i--){
        years.push(i);
    }

    return ( 
        <form>
            <div>
                <label>Marca</label>
                <select>
                    <option value="">-- Seleccione --</option>
                    { brands.map( brand => (
                        <option value={brand}>{brand}</option>
                    )) }
                </select>
            </div>
            <div>
                <label>Year</label>
                <select>
                    <option value="">-- Seleccione --</option>
                    { years.map( year => (
                        <option value={year}>{year}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Plan</label>
                <input 
                    type="radio"
                    name="plan"
                    value="Basic"
                /> Basic
                <input 
                    type="radio"
                    name="plan"
                    value="Complete"
                /> Complete
            </div>
            <button type="button">Submit</button>
        </form>
     );
}
 
export default Form;