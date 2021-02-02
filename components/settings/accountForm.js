import React from 'react'
import classNames from "classnames";
import {Field, Form} from "react-final-form";

import style from "../../styles/accountSetting.module.scss";
import gStyle from "../../styles/settingsGlobal.module.scss";
import {OnChange} from "react-final-form-listeners";

function AccountForm(props){
    let submit;
    const {updateUserInfo, Submit, changeColor} = props
    return(
         <div>
             <Form
                 onSubmit={updateUserInfo}
                 render={({handleSubmit, form, submitting, pristine, values}) => {
                     submit = handleSubmit;
                     Submit(handleSubmit)
                     return (
                         <form onSubmit={handleSubmit} name="AccountForm" onChange={() => changeColor(true)}>
                            <h3 className={style.h3}>Основная информация</h3>
                             <Field name="email">
                                 {({input, meta}) => (
                                     <div>
                                         <label className={gStyle.label}>Адрес электронный почты</label>
                                         <input type="text" name={"email"}  type="email" className={gStyle.input} placeholder="aika35321@gmail.com"
                                                onChange={(e) => {
                                                    changeColor(e.target.value)
                                                }}/>
                                         <button className={classNames(gStyle.button, gStyle.button_black)}>Изменить пароль</button>

                                     </div>
                                 )}
                             </Field>
                            {/*<label className={gStyle.label}>Адрес электронный почты</label>*/}
                            {/*<input type="text" className={gStyle.input} placeholder="aika35321@gmail.com"*/}
                            {/*       onChange={(e) => {*/}
                            {/*           changeColor(e.target.value)*/}
                            {/*       }}/>*/}
                            {/*<button className={classNames(gStyle.button, gStyle.button_black)}>Изменить пароль</button>*/}
                            {/* */}


                            <div className={style.form__cart}>
                                <Field name="country">
                                    {({input, meta}) => (
                                        <div>

                                                <label
                                                    className={classNames(gStyle.label, gStyle.label_inline)}>Страна/регион</label>
                                                <input type="text" name="country" className={classNames(gStyle.input, gStyle.input_inline)}
                                                       placeholder="Киргизия"
                                                       onChange={(e) => {
                                                           changeColor(e.target.value)
                                                       }}/>

                                            {meta.error && meta.touched && <span>{meta.error}</span>}

                                        </div>
                                    )}
                                </Field>
                                <Field name="language">
                                    {({input, meta}) => (
                                        <div>
                                            <label className={classNames(gStyle.label, gStyle.label_inline)}>Язык</label>
                                            <input type="text" name="language" className={classNames(gStyle.input, gStyle.input_inline)}
                                                   placeholder="Русский"
                                                   onChange={(e) => {
                                                       changeColor(e.target.value)
                                                   }}/>


                                            {meta.error && meta.touched && <span>{meta.error}</span>}

                                        </div>
                                    )}
                                </Field>

                            </div>

                            <label className={gStyle.label}>Пол</label>
                             <Field name="gender">
                                 {({input, meta}) => (
                                     <div className={style.cart__gender}>

                                         <input
                                             name="gender" type="radio"
                                             className={style.input__radio} id="man"
                                             // onChange={(e) => {
                                             //     changeColor(e.target.value)
                                             // }}
                                         />
                                         <label className={style.label__radio} htmlFor="man">Мужской</label>

                                         <input
                                             name="genderr" type={"radio"} id="woman"
                                             className={style.input__radio}
                                             // onChange={(e) => {
                                             //     changeColor(e.target.value)
                                             // }}
                                         />
                                         <label className={style.label__radio} htmlFor="woman">Женский</label>

                                         <input
                                             className={style.input__radio} id="other" name="gender" type={"radio"}
                                             // onChange={(e) => {
                                             //     changeColor(e.target.value)
                                             // }}
                                         />
                                         <label className={style.label__radio} htmlFor="other">Другой</label>

                                     </div>
                                 )}
                             </Field>
                             <Field >
                                 {({input, meta}) => (
                                     <div >
                                         <div className={style.param_input}>
                                             <h3 className={style.h3}>Параметр входа</h3>
                                             Используйте аккаунт Facebook или Google для входы в Pinterest.
                                             <span className={style.param_span}> Подробнее</span>

                                         </div>
                                         <div>
                                             <label className={gStyle.label_black}>
                                                 Facebook
                                             </label>
                                             <div className={style.checkbox_cart}>
                                                 <input className={style.input__checkbox} type="checkbox"/>
                                                 <label>Подключить аккаунт Facebook</label>
                                             </div>


                                             <label className={gStyle.label_black}>
                                                 Google
                                             </label>
                                             <div className={style.checkbox_cart}>
                                                 <input className={style.input__checkbox} type="checkbox"/>
                                                 <label>Использовать аккаунт Google для входа в Pinterest</label>
                                             </div>
                                         </div>
                                         <hr/>
                                     </div>
                                 )}
                             </Field>



                            <h3 className={style.h3}>Изменение аккаунта</h3>
                            <div className={style.card}>
                            <span className={style.card_span}>
                            <p className={style.card__p_bold}>Связанный бизнес-аккаунт</p>
                            <p className={style.card__p}>Свяжите личный и безнес-аккаунт, чтобы пользоваться едиными учетными данными для входа</p>
                            </span>
                                <button
                                    className={classNames(gStyle.button, gStyle.button_black, style.card__btn)}>Начать
                                </button>
                            </div>
                            <div className={style.card}>
                            <span className={style.card_span}>
                            <p className={style.card__p_bold}>Переход на бизнес-аккаунт</p>
                            <p className={style.card__p}>Создавайте объявления и просматривайте показатели эффективности пинов благодаря
                                бесплатному переходу на бизнес аккаунт.</p>
                            </span>
                                <button
                                    className={classNames(gStyle.button, gStyle.button_black, style.card__btn)}>Начать
                                </button>
                            </div>
                            <div className={style.card}>
                            <span className={style.card_span}>
                            <p className={style.card__p_bold}>Отключить аккаунт</p>
                            <p className={style.card__p}>Скрыть пины и профиль</p>
                            </span>
                                <button className={classNames(gStyle.button, gStyle.button_black, style.card__btn)}>
                                    Отключить аккаунт
                                </button>
                            </div>
                            <div className={style.card}>
                            <span className={style.card_span}>
                            <p className={style.card__p_bold}>Удалить аккаунт</p>
                            <p className={style.card__p}>Удалить аккаунт и его данные</p>
                            </span>
                                <button className={classNames(gStyle.button, gStyle.button_black, style.card__btn)}>
                                    Удалить аккаунт
                                </button>
                            </div>

                        </form>
                    )
                }
                }
            />

        </div>
    )
}


export default AccountForm;
