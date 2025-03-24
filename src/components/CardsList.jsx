import Card from './Card.jsx'

export default function CardsList({ cards }) {
    return (
        <div id="cardsList">
            <div id='Cards'>
                {
                    cards.map((comic) => {
                        return <Card title={comic.series.toUpperCase()} image={comic.thumb}/>
                    })
                }
            </div>
           
           <h3 id='cardsList-loadMore'>LOAD MORE</h3>
        </div>
    )
}