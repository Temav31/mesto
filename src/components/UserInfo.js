class UserInfo {
    constructor(profileName, profileWork, profileImage) {
        this._name = profileName;
        this._about = profileWork;
        this._image = profileImage;
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this._image.src,
        }
    }
    setUserInfo({name, about, avatar}) {
        this._name.textContent = name;
        this._about.textContent = about;
        this._image.src = avatar;
    }
}
export default UserInfo;