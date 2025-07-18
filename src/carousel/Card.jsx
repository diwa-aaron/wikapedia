import './Carousel.css'

function Card({image, title, description}) {
    return (
        <div className="cards" style={{backgroundImage:`linear-gradient(to top, #7981D3 10%, transparent 70%), url(${image})`}}>
            
            <div className="card-text">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>

        </div>
    );
}

export default Card;