const TOKEN = "accessToken";
const ROLES = "roles";

export function getToken() {
    return window.localStorage.getItem(TOKEN);
}

export function setToken(token) {
    window.localStorage.setItem(TOKEN, token);
}

export function clearToken() {
    window.localStorage.removeItem(TOKEN);
}

export function getRoles() {
    // return an array of allowed role
    return JSON.parse(window.localStorage.getItem(ROLES));
}

export function setRoles(roles) {
    window.localStorage.setItem(ROLES, JSON.stringify(roles));
}

export function clearRoles() {
    window.localStorage.removeItem(ROLES);
}

