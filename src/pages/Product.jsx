import { useOutletContext, useParams } from "react-router-dom";
import { cardArray } from "../constants";

export const Product = () => {
    const {products} = useOutletContext();
    const { id } = useParams();
    const findProduct  = products.find((p) => p.id == id)
    return (
        <>
            <section className="content">
                <div className="container">
                    {findProduct 
                        ? 
                                         <div className="content-box">
                        <div className="content-product">
                            <div className="content-product--left">
                                <h2 className="content-product-title">{findProduct.title}</h2>
                                <img src={findProduct.img} className="content-product-img" />
                                <p className="content-product-text">
                                    {findProduct.desc}
                                </p>
                            </div>
                            <div className="content-roduct-right">
                                <h2 className="content-product-price">{findProduct.price}</h2>
                                <button className="btn btn-primary btn-large">Показать телефон</button>
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
                                    <a href="#" className="content-side-footer--item-link">Реклама на сайте</a>
                                    <a href="#" className="content-side-footer--item-link">Вакансии</a>
                                    <a href="#" className="content-side-footer--item-link">Помощь</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <h2>Такого товара не существует</h2>   
                }
                </div>
            </section>
        </>
    );
}