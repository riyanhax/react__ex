
import {store} from '../store';
import { failUser } from 'act/user';
export const makeRequest = async ( url,init) => {

    try {
        const response = await fetch(url, 
            init
        );
        if (response.status === 401) {
           store.dispatch(failUser()); //dispatch logout for each 401 Unauthorized
          }
          else{
           const json = await response.json();
           //console.log(json)
            return json
          }        
       
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

