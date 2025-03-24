import Card from './Card.jsx'
import comics from '../data/comics.js'

export default function CardsList() {
    return (
        <div id="cardsList">
            <div id='Cards'>
                {
                    comics.map((comic) => {
                        return <Card title={comic.series} image={comic.thumb}/>
                    })
                }
            </div>
           
           <h3 id='cardsList-loadMore'>LOAD MORE</h3>
        </div>
    )
}