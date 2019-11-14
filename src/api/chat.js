import { makeRequest } from "./makeRequest"

export const fetchMessage = (text, lang) => {
    const init = {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(
            {
                text,
                lang
            }

        ),
    };
    return makeRequest(
        'api/v2/peatio/chat/message/send',
        init
    )

};
export const fetchGetMessages = () => {
    const init = {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    return makeRequest(
        `api/v2/peatio/chat/messages/en`,
        init
    )

};
