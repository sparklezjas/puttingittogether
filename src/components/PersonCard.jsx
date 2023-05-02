import React, { useState } from 'react';
    
const PersonCard = (props) => {
    const [ age, newAge ] = useState(props.initialAge)

    return (
        <div>
            <h2> { props.name } </h2>
            <p>Age: { age }</p>
            <p>Occupation: { props.occupation }</p>
            <p>Hometown: { props.home } </p>
            <button onClick={ (event) => newAge(age + 1)}>Happy Birthday, {props.name}!</button>
    </div>
    )
}
export default PersonCard;