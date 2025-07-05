import './Card.css';
import { Link } from 'react-router-dom';

export const Card = ({id, title, price, address, date, img}) => {
    return (
        <Link to={`/product/${id}`} className="content-main-list-item">
            <div className="content-main-list-item-img">
                <img src={img} alt="card-1" />
            </div>
            <h5 className="content-main-list-item-title">
                {title}
            </h5>
            <strong className="content-main-list-item-price">{price}</strong>
            <div className="content-main-list-item-desc">
                <span className="content-main-list-item-location">{address}</span>
                <span className="content-main-list-item-date">{date}</span>
            </div>
        </Link>
    );
}
