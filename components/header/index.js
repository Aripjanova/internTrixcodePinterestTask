import style from './header.module.scss'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.logo}>
                <div>
                    <a className={style.header__menu_item_a}>
                        <i className={`fab fa-pinterest  fa-2x ${style.red}`}/>
                    </a>
                </div>
            </div>
            <div className={style.header__menu}>
                <div className={style.header__menu_item}>
                    <a className={style.header__menu_item_a} href={'https://www.pinterest.com/'}>Главная</a>
                </div>
                <div className={style.header__menu_item}>
                    <a className={style.header__menu_item_a} href={'https://www.pinterest.com/following'}>Подписки</a>
                </div>
            </div>
            <div className={style.search}>
                <div className={style.search_icon}>
                    <i className={`fas fa-search ${style.i}`}/>
                </div>
                <input type="text" className={style.search__input} placeholder="Поиск"/>
            </div>
            <div className="notification">
                <button className={style.button}>
                    <i className={`fas fa-bell fa-2x ${style.i}`}/>
                </button>
                <button className={style.button}>
                    <i className={`fas fa-comment-dots  fa-2x ${style.i}`}/>
                </button>
            </div>

        </header>
    )
}