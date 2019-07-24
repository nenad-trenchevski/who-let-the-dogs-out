
export const callBreedsApi = async (endpoint) => {
    const response = await fetch(endpoint, req(METHOD_TYPES.GET));
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.message);
    } else {
        return body;
    };
};

const req = type => {
    const config = {
        method: type,
        headers: {
            'content-type': 'application/json'
        }
    };
    return config;
};

const METHOD_TYPES = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE' 
};