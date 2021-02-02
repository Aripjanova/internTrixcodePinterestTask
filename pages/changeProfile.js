import Main from '../components/content'
import Profile from "../containers/settings/profile";
import gStyle from "../styles/settingsGlobal.module.scss";

const ChangeProfile = () => {

    return (
        <Main>
            <div className={gStyle.content}>
                <Profile/>
            </div>

        </Main>
    )
}


export default ChangeProfile;