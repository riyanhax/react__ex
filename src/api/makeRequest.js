
import { store } from '../store';
import { failUser } from 'act/auth/user';
export const makeRequest = async (url, init) => {

    try {
        const response = await fetch(
            url,
            init
        );

        if (response.status === 401) {
            store.dispatch(failUser()); //dispatch logout for each 401 Unauthorized
        }
        const json = await response.json();

        return json

    } catch (error) {
        console.log(error)
    }
}




