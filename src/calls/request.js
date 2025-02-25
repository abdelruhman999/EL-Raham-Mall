import { BASE_URL, AUTH_KEY } from '../utils/constants';
import Swal from 'sweetalert2';

export const sendRequest = ({ url, method, params, data, headers = true }) => {
    return fetch(
        `${BASE_URL}${url}${
            params ? '?' + new URLSearchParams(params).toString() : ''
        }`,
        {
            method: method,
            body: data,
            credentials: 'include', // include cookies in the request
            headers: {
                ...(headers === true ? {} : headers),
                Authorization: localStorage.getItem(AUTH_KEY)
            }
        }
    ).then(async response => {
        if (response.status > 199 && response.status < 400) {
            return await response.json();
        } else if (response.status === 401) {
            localStorage.removeItem(AUTH_KEY);
            Swal.fire({
                icon: 'error',
                text: 'الرجاء اعادة تسجيل الدخول',
                showConfirmButton: false,
                timer: 10000
            });
            // .then(() => window.location.reload());
        } else if (response.status === 403) {
            window.location.pathname = 'dashboard';
        } else if (response.status === 400) {
            const errorResponse = await response.json();
            Swal.fire({
                icon: 'error',
                text:`${errorResponse.detail}`,
                showConfirmButton: false,
                timer: 10000
            });
            throw new Error(response.statusText);
        } else {
            const errorResponse = await response.json();
            console.log('Error response:', errorResponse);
            throw new Error(response.statusText);
        }
    });
};
