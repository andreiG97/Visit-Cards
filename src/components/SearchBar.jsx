import React from 'react'

export default function SearchBar({search}) {
    return (
        <div className='pa2'>
            <input type="search" placeholder='Search contact' onChange={search}/>
        </div>
    )
}
