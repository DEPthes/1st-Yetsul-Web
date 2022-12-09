/* eslint-disable no-alert */
export const setAccessToken = (token: string): void => {
    const obj = {
        value: token,
        expire: Date.now() + 72_000_000,
    };

    const objString = JSON.stringify(obj);

    localStorage.setItem('accessToken', objString);
};

export const getAccessToken = (): string | null => {
    const objString = localStorage.getItem('accessToken');
    if (!objString) {
        return null;
    }
    const obj = JSON.parse(objString);
    if (Date.now() > obj.expire) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        alert('로그인이 만료되었습니다.');
        window.location.replace('/');
        return null;
    }
    return obj.value;
};

export const deleteAccessToken = (): void => {
    return localStorage.removeItem('accessToken');
};

export const setRefreshToken = (token: string): void => {
    localStorage.setItem('refreshToken', token);
};

export const getRefreshToken = (): string | null => {
    return localStorage.getItem('refreshToken');
};

export const deleteRefreshToken = (): void => {
    return localStorage.removeItem('refreshToken');
};
