class UserInfo {
    constructor(profileName, profileWork) {
        this._name = profileName;
        this._about = profileWork;
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
        }
    }
    setUserInfo({name, about}) {
        this._name.textContent = name;
        this._about.textContent = about;
    }
}
export default UserInfo;