import { useState } from 'react'
import Card from './Card.jsx'

export default function CardsList({ cards }) {

    const [searchValue, setSearchValue] = useState('')

    const filteredCards = cards.filter(comic => 
        searchValue.length >= 1 
            ? comic.series.toLowerCase().includes(searchValue.toLowerCase())
            : true
    )

    return (
        <div id="cardsList">
            <input 
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search title"
            />

            <div id='Cards'>
                {filteredCards.map((comic) => (
                    <Card 
                        title={comic.series.toUpperCase()} 
                        image={comic.thumb}
                    />
                ))}
            </div>
           
            <h3 id='cardsList-loadMore'>LOAD MORE</h3>
        </div>
    )
}