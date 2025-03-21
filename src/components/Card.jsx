export default function Card({ title, image }) {
    return (
        <div className="card">
            <div className="img-container">
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
        </div>
    )
}