import Main from '../../components/content/index'
import {useState} from 'react'
import classNames from "classnames";

import style from '../../styles/changeProfile.module.scss'
import SettingsTitle from "./SettingsTitle";
import SttingsTitle from "./SettingsTitle";
import gStyle from "../../styles/settingsGlobal.module.scss";

export default function ChangeProfile() {
    const [image, setImage] = useState('')
    const [bg_color, changeColor] = useState('')
    // const classNames= className()

    return (
        <Main>
            <div className={gStyle.content}>
                <SttingsTitle btn_color={bg_color}
                              title={"Изменение профиля"}
                              content_text={"Указанные ниже сведение помогут другим " +
                              "пользователям Pinterest узнать вас лучше"}/>

                <div>
                    <div className={style.form__header}>
                        <p>
                            Фотография
                        </p>
                        <div className={style.avatar}>
                            <div className={style.img}>
                                {image ? <img src={image}/> : <span>A</span>}
                                {/*<img src={image}/>*/}
                            </div>
                            <input type="file" accept=".png, .jpg, .jpeg" name="image"
                                   id="imageUpload" className={style.avatar__change_input}
                                   onChange={(event) => setImage(
                                       URL.createObjectURL(event.target.files[0]))}/>
                            <label className={style.avatar__change_label} htmlFor="imageUpload">Изменить</label>
                        </div>

                    </div>
                    <form>

                        <div className={style.form__cart}>
                            <div>
                                <label className={classNames(gStyle.label, gStyle.label_inline)}>Имя</label>
                                <input type="text" className={classNames(gStyle.input, gStyle.input_inline)}
                                       placeholder="Aika"
                                       onChange={(e) => {
                                           changeColor(e.target.value)
                                       }}/>

                            </div>
                            <div>
                                <label className={classNames(gStyle.label, gStyle.label_inline)}>Фамилия</label>
                                <input type="text"
                                       className={classNames(gStyle.input, gStyle.input_inline)}
                                       placeholder="Например, Петров"
                                       onChange={(e) => {
                                           changeColor(e.target.value)
                                       }}/>

                            </div>
                        </div>

                        <label className={gStyle.label}>Имя пользователя</label>
                        <input className={gStyle.input} type="text" placeholder="aika35321"
                               onChange={(e) => {
                                   changeColor(e.target.value)
                               }}/>
                        <div className={style.form__input_err}>www.pinterest.com/aika35321</div>
                        <label className={gStyle.label}>Сведение о вашем профиле</label>
                        <textarea className={gStyle.textarea} placeholder=" Расскажите немного о себе"
                                  onChange={(e) => {
                                      changeColor(e.target.value)
                                  }}>

                        </textarea>
                        <label className={gStyle.label}>URL-адрес веб сайта</label>
                        <input className={gStyle.input} type="text"
                               onChange={(e) => {
                                   changeColor(e.target.value)
                               }}/>
                        <label className={gStyle.label}>Расположение</label>
                        <input className={classNames(gStyle.input, gStyle.input_grey)}
                               placeholder="Например, Санк-Петерберг"/>
                    </form>

                </div>
            </div>

        </Main>
    )
}