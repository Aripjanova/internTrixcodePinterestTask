import {connect} from "react-redux";

import AccountForm from "../../components/settings/accountForm";
import {updateUserInfo} from "../../store/settings/slice";
import SettingsTitle from "../../components/settings/SettingsTitle";
import React, {useState} from "react";
import ProfileForm from "../../components/settings/profileForm";

let submit;
const onSubmit=(a)=>{
    submit=a;
}
function Account (props){
    const [bg_color, SetValue]=useState()
    return(
        <>
            <SettingsTitle
                title={"Изменение профиля"}
                bg_color={bg_color}
                content_text={"Указанные ниже сведение помогут другим " +
                "пользователям Pinterest узнать вас лучше"}
                submit={submit}
            >

            </SettingsTitle>
            <AccountForm updateUserInfo={props.updateUserInfo}
                         Submit={onSubmit}
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

export default connect(mapStateToProps, mapDispatchToProps)(Account);