import axios from 'axios';
import { getAccessToken } from './tokenControl';

export const setUserLocalStorage = (info: string): void => {
    localStorage.setItem('user', info);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getUserLocalStorage = (): any => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (localStorage.getItem('user')) {
        return JSON.parse(localStorage.getItem('user') || '{}');
    }
    return 0;
};

export const deleteUserLocalStorage = (): void => {
    return localStorage.removeItem('user');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const userAPI = async () => {
    const token = getAccessToken();
    console.log(token);
    if (token) {
        await axios
            .get('https://yetsul-server.site/auth/user', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(async (res) => {
                console.log(res.data);
                const stringifyUser = JSON.stringify(res.data);

                setUserLocalStorage(stringifyUser);
            });
    }
};
