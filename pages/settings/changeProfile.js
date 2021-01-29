import {useState} from 'react'
import {connect} from 'react-redux'
import classNames from "classnames";
import {Form, Field} from "react-final-form";
import {OnChange} from 'react-final-form-listeners'

import style from '../../styles/changeProfile.module.scss'
import gStyle from "../../styles/settingsGlobal.module.scss";
import Main from '../../components/content/index'
import SettingsTitle from "../../components/settings/SettingsTitle";

import {updateUserInfo} from '../../store/settings/slice'


const onSubmit = async values => {
    window.alert(JSON.stringify(values, undefined, 2));
};

const ChangeProfile = (props) => {
    const [image, setImage] = useState('')
    const [bg_color, changeColor] = useState('')
    return (
        <Main>
            <div className={gStyle.content}>
                <SettingsTitle btn_color={bg_color}
                               title={"Изменение профиля"}
                               content_text={"Указанные ниже сведение помогут другим " +
                               "пользователям Pinterest узнать вас лучше"}
                />
                <div>

                    <Form
                        onSubmit={props.updateUserInfo}
                        render={({handleSubmit, form, submitting, pristine, values}) => (
                            <form onSubmit={handleSubmit}>
                                <div className={style.formImgCart}>
                                    <p>
                                        Фотография
                                    </p>
                                    <div className={style.avatar}>
                                        <div className={style.img}>
                                            {image ? <img src={image}/> : <span>A</span>}
                                            {/*<img src={image}/>*/}
                                        </div>


                                        <Field name="userimage">
                                            {({input, meta}) => (
                                                <div>
                                                    <label className={style.avatar__change_label}
                                                           htmlFor="imageUpload">Изменить</label>
                                                    <input {...input}
                                                           type="file" accept=".png, .jpg, .jpeg" name="userimage"
                                                           id="imageUpload" className={style.avatar__change_input}

                                                    />
                                                    <OnChange name="userimage">
                                                        {
                                                            (value) => {
                                                                setImage(
                                                                    props.user.userimage ? URL.createObjectURL(value.target.files[0]) : props.user.userimage)
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
                                                    placeholder={props.user.user.firstName}
                                                    className={classNames(gStyle.input, gStyle.input_inline)}
                                                />
                                                <OnChange name="firstName">
                                                    {(value, previous) => {
                                                        console.log(value)
                                                        changeColor(value)

                                                    }}
                                                </OnChange>
                                            </div>
                                        )}
                                    </Field>
                                    <Field name="lastName">
                                        {({input, meta}) => (
                                            <div>
                                                <label
                                                    className={classNames(gStyle.label, gStyle.label_inline)}>Фамилия</label>
                                                <input {...input} type="text"
                                                       className={classNames(gStyle.input, gStyle.input_inline)}
                                                       placeholder={props.user}
                                                />
                                                {meta.error && meta.touched && <span>{meta.error}</span>}
                                                <OnChange name="lastName">
                                                    {(value, previous) => {
                                                        console.log(value)
                                                        changeColor(value)

                                                    }}
                                                </OnChange>
                                            </div>
                                        )}
                                    </Field>
                                </div>
                                <Field name="userName">
                                    {({input, meta}) => (
                                        <div>
                                            <label className={gStyle.label}>Имя пользователя</label>
                                            <input {...input} type="text" placeholder={props.user.user.userName}
                                                   className={gStyle.input}

                                            />
                                            {meta.error && meta.touched && <span>{meta.error}</span>}
                                            <OnChange name="userName">
                                                {(value, previous) => {
                                                    console.log(value)
                                                    changeColor(value)

                                                }}
                                            </OnChange>
                                        </div>
                                    )}
                                </Field>
                                <div className={style.form__input_err}>www.pinterest.com/aika35321</div>
                                <label className={gStyle.label}>Сведение о вашем профиле</label>
                                <Field name="aboutYou"
                                       component="textarea"
                                       className={gStyle.textarea}
                                       placeholder="Расскажите немного о себе"
                                />
                                <OnChange name="aboutYou">
                                    {(value, previous) => {
                                        console.log(value)
                                        changeColor(value)

                                    }}
                                </OnChange>
                                <Field name="url">
                                    {({input, meta}) => (
                                        <div>
                                            <label className={gStyle.label}>URL-адрес веб сайта</label>
                                            <input {...input} className={gStyle.input} type="text"
                                                   placeholder={props.user.url}
                                            />
                                            <OnChange name="url">
                                                {(value, previous) => {
                                                    console.log(value)
                                                    changeColor(value)

                                                }}
                                            </OnChange>
                                        </div>
                                    )}
                                </Field>
                                <Field name="location">
                                    {({input, meta}) => (
                                        <div>
                                            <label className={gStyle.label}>Расположение</label>
                                            <input {...input} className={classNames(gStyle.input, gStyle.input_grey)}
                                                   placeholder={props.user.location}/>
                                            <OnChange name="location">
                                                {(value, previous) => {
                                                    console.log(value)
                                                    changeColor(value)

                                                }}
                                            </OnChange>
                                        </div>
                                    )}
                                </Field>
                                <button type="submit" disabled={submitting}>
                                    Submit
                                </button>
                            </form>
                        )}
                    />

                </div>
            </div>

        </Main>
    )
}
const mapStateToProps = (state) => {

    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    updateUserInfo

};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeProfile);