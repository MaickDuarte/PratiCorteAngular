export function isEmail(email: string): boolean {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}

export function isPassword(password: string): boolean {
    if (password.length >= 6) {
        return true
    }
    return false
}

export function isEmpty(value: any): boolean {
    if (value.length === 0 || value === null || value === undefined || value === '') {
        return true
    }
    return false
}