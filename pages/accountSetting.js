import Main from '../components/content'
import gStyle from '../styles/settingsGlobal.module.scss'
import Account from "../containers/settings/account";

function AccountSetting() {
    return (
        <Main>
            <div className={gStyle.content}>
                <Account/>
            </div>

        </Main>
    )
}

export default AccountSetting;