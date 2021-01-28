import ActiveLink from './activeLink'
import style from './menu.module.scss'


export default function Menu(){
    return(
        <>
            <aside className={style.aside}>
                <nav className={style.menu}>
                    <ul className={style.menu__ul}>
                        <li className={style.menu__li}>
                            <ActiveLink activeClassName={style.menu__li_active} href="/settings/changeProfile">
                                <a className={`${style.a}`}>
                                    <i className={`fas fa-pen ${style.i} `}/>
                                    Изменение профиля
                                </a>
                            </ActiveLink>

                        </li>
                        <li className={style.menu__li}>
                            <ActiveLink activeClassName={style.menu__li_active} href="/settings/AccountSetting">
                                <a className={`${style.a}`}>
                                    <i className={`fas fa-user ${style.i} `}/>
                                    Настройки аккаунта
                                </a>
                            </ActiveLink>

                        </li>
                        <li className={style.menu__li}>
                            <ActiveLink activeClassName={style.menu__li_active} href="https://www.pinterest.com/settings/claim">
                                <a className={`${style.a}`}>
                                    <i className={`fas fa-check-circle ${style.i} `} />
                                    Подтвердить
                                </a>
                            </ActiveLink>

                        </li>
                        <li className={style.menu__li}>
                            <a className={`${style.a}`}>
                                <i className={`fas fa-bell ${style.i} `}  />

                                Уведомление
                            </a>
                        </li >
                        <li className={style.menu__li}>
                            <a className={`${style.a}`}>
                                <i className={`fas fa-lock ${style.i} `} />
                                Конфиденциальные данные
                            </a>
                        </li>
                        <li className={style.menu__li}>
                            <a className={`${style.a}`}>
                                <i className={`fas fa-shield ${style.i} `} />
                                Безапасность
                            </a>
                        </li>
                        <li className={style.menu__li}>
                            <a className={`${style.a}`}>
                                <img/>Приложение
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )

}