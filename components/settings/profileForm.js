import React from 'react'
import {useState} from 'react'
import classNames from "classnames";
import {Field, Form} from "react-final-form";
import {OnChange} from "react-final-form-listeners";

import gStyle from "../../styles/settingsGlobal.module.scss";
import style from "../../styles/changeProfile.module.scss";
import titleStyle from "../../styles/settingsTitle.module.scss";
import ErrorWithDelay from "../../containers/settings/errorWithDelay";

function ProfileForm(props) {

    const [image, setImage] = useState('')

    const {user, updateUserInfo, FormRenderValue, changeColor} = props
    return (
        <div>
            <Form
                onSubmit={updateUserInfo}
                validate={values => {
                    const errors = {}
                    if (!values.firstName) {
                        errors.firstName = 'Обязательный'
                    }
                    else if (values.firstName.length<4) {
                        errors.firstName = 'Вам нужно более длинное имя'
                    }
                    else if (!(/^[A-Z]/.test( values.firstName))) {
                        errors.firstName = 'Напишите свое имя с большой буквы'
                    }

                    if (!values.userName) {
                        errors.userName =  'Обязательный'
                    }
                    else if (!isNaN(values.userName)) {
                        errors.userName =  'Должно быть письмо'
                    }
                    else if (values.userName.length<4) {
                        errors.userName = 'Вам нужно более длинное имя'
                    }
                    return errors
                }}
                render={({handleSubmit, form,reset, submitting, pristine, values}) => {
                    FormRenderValue(handleSubmit, submitting, reset)
                    return (
                        <form onSubmit={handleSubmit} name="ProfileForm" onChange={() =>changeColor(values?true: false) }>

                            <div className={style.formImgCart}>
                                <p>
                                    Фотография
                                </p>
                                <div className={style.avatar}>
                                    <div className={style.img}>
                                        {image ? <img src={image}/> : <span>A</span>}
                                        {/*<img src={image}/>*/}
                                    </div>
                                    <Field name="userImage">
                                        {({input, meta}) => (
                                            <div>
                                                <label className={style.avatar__change_label}
                                                       htmlFor="imageUpload">Изменить</label>
                                                <Field component="input" name="userImage"
                                                       type="file" accept=".png, .jpg, .jpeg"
                                                       id="imageUpload" className={style.avatar__change_input}

                                                />
                                                <OnChange name="userImage">
                                                    {
                                                        (e) => {
                                                            setImage(
                                                                URL.createObjectURL(e.target.files[0])
                                                            )
                                                        }
                                                    }
                                                </OnChange>
                                            </div>
                                        )}
                                    </Field>


                                </div>

                            </div>

                            <div className={style.form__cart}>
                                <Field name="firstName">
                                    {({input, meta}) => (
                                        <div>
                                            <label
                                                className={classNames(gStyle.label, gStyle.label_inline)}>Имя</label>
                                            <Field
                                                name="firstName"
                                                component="input"
                                                type="text"
                                                placeholder="Например, Иван"
                                                value={user.firstName}
                                                defaultValue={user.user.firstName}
                                                className={classNames(gStyle.input, gStyle.input_inline)}


                                            />
                                            <ErrorWithDelay name="firstName" delay={1000}>
                                                {error => <span className={gStyle.formError}>{error}</span>}
                                            </ErrorWithDelay>
                                        </div>
                                    )}
                                </Field>
                                <Field name="lastName">
                                    {({input, meta}) => (
                                        <div>
                                            <label
                                                className={classNames(gStyle.label, gStyle.label_inline)}>Фамилия</label>
                                            <Field
                                                component="input"
                                                type="text" name="lastName"
                                                className={classNames(gStyle.input, gStyle.input_inline)}
                                                value={user.user.lastName}
                                                defaultValue={user.user.lastName}
                                                placeholder="Например, Петров"
                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}

                                        </div>
                                    )}
                                </Field>
                            </div>
                            <Field name="userName">
                                {({input, meta}) => (
                                    <div>
                                        <label className={gStyle.label}>Имя пользователя</label>
                                        <Field component="input"
                                               type="text"
                                               name="userName"
                                               defaultValue={user.user.userName}
                                               value={user.user.userName}
                                               placeholder=""
                                               className={gStyle.input}

                                        />
                                        <ErrorWithDelay name="userName" delay={1000}>
                                            {error => <span className={gStyle.formError}>{error}</span>}
                                        </ErrorWithDelay>
                                        {/*{meta.error && meta.touched && <span>{meta.error}</span>}*/}
                                    </div>
                                )}
                            </Field>
                            <div className={style.form__input_err}>www.pinterest.com/aika35321</div>
                            <label className={gStyle.label}>Сведение о вашем профиле</label>
                            <Field name="aboutYou"
                                   component="textarea"
                                   className={gStyle.textarea}
                                   placeholder="Расскажите немного о себе"
                                   // defaultValue={user.user.aboutYou}
                                   // value={user.user.aboutYou}
                            />
                            <OnChange name="aboutYou">
                                {(value, previous) => {
                                    changeColor(value)

                                }}
                            </OnChange>
                            <Field name="url">
                                {({input, meta}) => (
                                    <div>
                                        <label className={gStyle.label}>URL-адрес веб сайта</label>
                                        <Field name="url"
                                               component="input"
                                               className={gStyle.input} type="text"
                                               defaultValue={user.user.url}
                                               value={user.user.url}
                                        />
                                    </div>
                                )}
                            </Field>
                            <Field name="location">
                                {({input, meta}) => (
                                    <div>
                                        <label className={gStyle.label}>Расположение</label>
                                        <Field name="location"
                                               component="input"
                                               className={classNames(gStyle.input, gStyle.input_grey)}
                                               placeholder="Например, Бишкек"
                                               defaultValue={user.user.location}
                                               value={user.user.location}
                                        />
                                    </div>
                                )}
                            </Field>

                        </form>
                    )
                }
                }
            />

        </div>
    )
}

export default ProfileForm;

