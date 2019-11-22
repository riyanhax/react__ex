
import { store } from '../store';
import { failUser } from 'act/user';
export const makeRequest = async (url, init) => {

    try {
        const response = await fetch(
            url,
            init
        );
        if (response.status === 422) {
         
        }
        const json = await response.json(); 
        return json

    } catch (error) {
        console.log(error)
    }
}




