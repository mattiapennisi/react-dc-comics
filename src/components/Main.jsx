import Features from './Features'
import CardsList from './CardsList'

export default function Main() {
    return (
        <main id="Main">
            <section id="main-jumbotron">
                
            </section>
            <section id="main-contents">
                <h2 id='main-contents-tag'>CURRENT SERIES</h2>

                <CardsList />
            </section>
            
            <Features />
        </main>
    )
}