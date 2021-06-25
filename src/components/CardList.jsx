import React from 'react';
import Card from './Card';
import { robots } from '../utils/Robot';

export default function CardList() {
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
