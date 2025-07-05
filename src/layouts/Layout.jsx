import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { useEffect, useState } from "react";
import { cardArray } from "../constants";

export const Layout = () => {

    const [searchText, setSearchText] = useState('')
    const [products, setProducts] = useState([])

    const handleSearch = (event) => {
        setSearchText(event.target.value);
    }

    const handleSearchArray = () => {
        setProducts(cardArray.filter((item) => {
            return (item.title.includes(searchText) || item.title.toLowerCase().includes(searchText)) || item.price.includes(searchText);
        }));
    }

    useEffect(() => {
        setProducts(cardArray)
    }, [])

    return (
        <>
            <Header />

            <main>
                <section className="search">
                    <div className="container">
                        <div className="search-box">
                            <input type="text" 
                                value={searchText}
                                onChange={handleSearch}
                            className="search-box-input" />
                            <button className="btn btn-primary search-btn" onClick={handleSearchArray}>
                                <i className="ri-search-line"></i>
                                <span className="search-btn-text">Найти</span>
                            </button>
                        </div>
                    </div>
                </section>
                <Outlet context={{products}}/>
            </main>
        </>
    );
}