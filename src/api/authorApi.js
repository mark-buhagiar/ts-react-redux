/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { handleResponse, handleError } from './apiUtils';
const baseUrl = process.env.API_URL + '/authors/';

export function getAuthors() {
    return fetch(baseUrl).then(handleResponse).catch(handleError);
}
