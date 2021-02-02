import {connect} from "react-redux";

import {updateUserInfo} from "../../store/settings/slice";
import ProfileForm from "../../components/settings/profileForm";
import SettingsTitle from '../../components/settings/SettingsTitle'
import React, {useState} from "react";

let handleSubmit;
let reset;
let submitting;
const FormRenderValue = (Submit, Reset, Submitting) => {
    handleSubmit = Submit;
    reset = Reset;
    submitting = Submitting
}

function Profile(props) {
    const [bg_color, SetValue] = useState(false)

    return (
        <>
            <SettingsTitle
                title={"Изменение профиля"}
                bg_color={bg_color}
                content_text={"Указанные ниже сведение помогут другим " +
                "пользователям Pinterest узнать вас лучше"}
                handleSubmit={handleSubmit}
                reset={reset}
                submitting={submitting}
            >

            </SettingsTitle>
            <ProfileForm updateUserInfo={props.updateUserInfo}
                         user={props.user}
                         FormRenderValue={FormRenderValue}
                         changeColor={SetValue}

            />
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

