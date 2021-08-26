import React from 'react';


export default function Card(props) {
    const { id, name } = props
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 w-20'>
            <h1 className="tc">Robot Card</h1>
            <div className='tc'>
                <img className='pl2 w-75' alt="robo" src={`https://robohash.org/${id}`} />
                <h3>{name}</h3>
            </div>
        </div>
    )
}
