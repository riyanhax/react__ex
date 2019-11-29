import { makeRequest } from '../makeRequest';

export const fetchLoginHistory = () => {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return makeRequest(
        '/api/v2/barong/resource/users/activity/session?limit=10',
        init
    )

};