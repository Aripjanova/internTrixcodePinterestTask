import style from '../../styles/settingsTitle.module.scss'
import classNames from "classnames";


function SettingsTitle(props) {
    return (
        <>
            <div className={style.settingTitle}>
                <div className={style.settingTitle__left}>
                    <h1>
                        {props.title}
                    </h1>
                    <p>
                        {props.content_text}
                    </p>
                </div>
                <div className={style.settingTitle__right}>
                    <button className={classNames(style.button, {[style.button_color]: props.btn_color})}>Отмена</button>
                    <button className={classNames(style.button, {[style.button_background]: props.btn_color})}>Готово</button>

                </div>

            </div>
        </>
    )
}

export default SettingsTitle;