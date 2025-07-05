import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-box">
                    <div className="header-logo">
                        <Link to={'/'}>
                                <img src="/images/logo.svg" alt="logo" />
                        </Link>
                    </div>
                    <div className="header-controls">
                        <button className="btn btn-outline">Вход и регистрация</button>
                        <button className="btn btn-primary">Подать обьявление</button>
                    </div>

                    <div className="header-burger">
                        <img src="/images/menu.svg" />
                    </div>
                </div>
            </div>
        </header>
    );
}