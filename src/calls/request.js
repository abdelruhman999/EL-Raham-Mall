import { BASE_URL  , AUTH_KEY} from "../utils/constants";
import Swal from "sweetalert2";

export const sendRequest = ({ url, method, params, data, headers = true }) => {
    return fetch(`${BASE_URL}${url}${params ? "?" + new URLSearchParams(params).toString() : ""}`, {
        method: method,
        body: data,
        credentials: 'include', // include cookies in the request
        headers: {
            ...headers,
            'Authorization': localStorage.getItem(AUTH_KEY)?.Authorization,
        }
    }).then(response => {
        if (response.status === 200) {
            return response.json();
        } else if (response.status === 401) {
            localStorage.removeItem(AUTH_KEY);
            Swal.fire({
                icon: "error",
                text: "الرجاء اعادة تسجيل الدخول",
                showConfirmButton: false,
                timer: 1000
            }).then(() => window.location.reload());
        } else if (response.status === 403) {
            window.location.pathname = "dashboard";
        } else {
            throw new Error(response.statusText);
        }
    });
};
