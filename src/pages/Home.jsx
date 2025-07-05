import { useOutletContext } from "react-router-dom";
import { Card } from "../components/Card/Card";

export const Home = () => {
    const {products} = useOutletContext();
    console.log(products);

    return (
        <>
                <section className="content">
                    <div className="container">
                        <div className="content-box">
                            <div className="content-main">
                                <h2 className="content-main-title">Рекомендации для Вас</h2>
                                <div className="content-main-list">
                                    {
                                        products && products.map((card) => (
                                            <Card 
                                                id={card.id}
                                                key={card.id}
                                                title={card.title}
                                                price={card.price}
                                                address={card.address}
                                                date={card.date}
                                                img={card.img}
                                            />
                                        
                                    ))}

                                </div>
                            </div>

                            <div className="content-side">
                                <h3 className="content-sidebar-title">Сервисы и услуги</h3>
                                <div className="content-side-box">
                                    <div className="content-side-list">
                                        <div className="content-side-list-item">
                                            <img src="/images/truck.svg" alt="side-info" className="content-side-list-item--img" />
                                            <h5 className="content-side-list-item--title">Доставка</h5>
                                            <p className="content-side-list-item--text">Проверка при получении и возможность бесплатно вернуть товар</p>
                                        </div>
                                        <div className="content-side-list-item">
                                            <img src="/images/sedan.svg" alt="side-info" className="content-side-list-item--img" />
                                            <h5 className="content-side-list-item--title">Автотека</h5>
                                            <p className="content-side-list-item--text">Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах</p>
                                        </div>
                                        <div className="content-side-list-item">
                                            <img src="/images/house.svg" alt="side-info" className="content-side-list-item--img" />
                                            <h5 className="content-side-list-item--title">Онлайн-бронирование жилья</h5>
                                            <p className="content-side-list-item--text">Посуточная аренда квартир и домов: большой выбор вариантов для поездок по России</p>
                                        </div>
                                    </div>

                                    <div className="content-side-footer">
                                        <p className="content-side-footer--item">
                                            © ООО «Абито», 2011–2021 <br/>
                                            Политика конфиденциальности <br/>
                                            Обработка данных
                                        </p>
                                        <a href="#!" className="content-side-footer--item-link">Реклама на сайте</a>
                                        <a href="#!" className="content-side-footer--item-link">Вакансии</a>
                                        <a href="#!" className="content-side-footer--item-link">Помощь</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}