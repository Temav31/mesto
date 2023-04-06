class Api {
    constructor(basePath, token) {
        this._basePath = basePath;
        this._token = token;
    }
    _getHeaders(){
        return{
                authorization: this._token,
                'Content-Type': 'application/json'
        }
    }
    _getJson(res){
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    getProfile() {
        const p = fetch(`${this._basePath}/users/me`, {
            headers: this._getHeaders(),
        })
        return p.then(this._getJson);
    };
    editProfile(item) {
        return fetch(`${this._basePath}/users/me`, {
            method: "PATCH",
            headers: this._getHeaders(),
            body: JSON.stringify(item),
        })
            .then(this._getJson);
    }
    editProfileImage(item) {
        return fetch(`${this._basePath}/users/me/avatar`, {
            method: "PATCH",
            headers: this._getHeaders(),
            body: JSON.stringify(item),
        })
            .then(this._getJson);
    }
    getCard() {
        const c = fetch(`${this._basePath}/cards`, {
            headers: this._getHeaders(),
        })
        return c.then(this._getJson);
    };
    addCard(item) {
        return fetch(`${this._basePath}/cards`, {
            method: "POST",
            headers: this._getHeaders(),
            body: JSON.stringify(item),
        })
            .then(this._getJson);
    }
    removeCard(id) {
        return fetch(`${this._basePath}/cards/${id}`, {
            method: "DELETE",
            headers: this._getHeaders(),
        })
            .then(this._getJson);
    }
    likeCard(id) {
        return fetch(`${this._basePath}/cards/${id}/likes`, {
            method: "PUT",
            headers: this._getHeaders(),
        })
            .then(this._getJson);
    }
    deleteLikeCard(id) {
        return fetch(`${this._basePath}/cards/${id}/likes`, {
            method: "DELETE",
            headers: this._getHeaders(),
        })
            .then(this._getJson);
    }
}
export default Api;