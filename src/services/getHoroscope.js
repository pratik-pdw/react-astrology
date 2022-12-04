import { API_ENDPOINT } from '../constants';

export const getHoroscope = async (sign = '', day = 'Today') => {
    const url = new URL('/', API_ENDPOINT);
    const params = { sign, day };
    url.search = new URLSearchParams(params).toString();
    try {
        const response = await fetch(url, { method: 'POST' });
        const data = await response.json();
        return data;
    } catch (e) {
        return e.message;
    }
}