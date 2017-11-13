

export const callAPI = (method, url, params) => {
    
    // params = {...params, "api-key": APIKey};
    // url = new URL(url);

    // Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url, {
        method: 'GET',
        crossDomain: true,
        headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
    }).then(res => {
        return res.text()
    }).catch(err => 
        console.log(err)
    )
}