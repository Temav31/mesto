// import { nameInput as name, workInput as work } from './index.js'
class UserInfo {
    constructor(profileName, profileWork) {
        this._name = profileName;
        this._work = profileWork;
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            work: this._work.textContent,
        }
    }
    setUserInfo({name, work}) {
        this._name.textContent = name;
        this._work.textContent = work;
    }
}
export default UserInfo;
