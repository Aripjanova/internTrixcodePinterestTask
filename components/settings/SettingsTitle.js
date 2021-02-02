import style from '../../styles/settingsTitle.module.scss'
import classNames from "classnames";
import titleStyle from "../../styles/settingsTitle.module.scss";
import React from "react";


function SettingsTitle(props) {
    console.log(props.bg_color)
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
                    <button className={classNames(titleStyle.button, {[titleStyle.button_color]: props.bg_color})}
                            onClick={()=>props.reset} disabled={props.submitting}
                    >
                        Отмена
                    </button>
                    <button
                        type="submit"
                        onClick={event => {
                            // console.log(submit)
                            // console.log(event)

                            props.handleSubmit(event)
                        }}
                        className={classNames(titleStyle.button, {[titleStyle.button_background]: props.bg_color})}>Готово
                    </button>
                </div>

            </div>
        </>
    )
}

export default SettingsTitle;