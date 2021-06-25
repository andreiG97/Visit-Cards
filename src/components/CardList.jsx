import React from 'react';
import Card from './Card';


export default function CardList(props) {
    const {robots} = props;
    return (
        <div>
            {
                robots.map((contact, index) => {
                    return <Card key={index} id={contact.id} name={contact.name} email={contact.email}/>
                })
            }
           
        </div>
    )
}
