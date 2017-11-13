
const APIKey = "s9fen76swqufsd6ht4qacsnh";
const baseURL = "http://api.hotwire.com/v1/search/car";

export const callAPI = (method, url, params) => {
    
    params = {...params, "api-key": APIKey};
    url = new URL(url);

    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

    return fetch(url, {
        method: method,
    }).then(res => {
        return res.json()
    }).catch(err => 
        console.log(err)
    )
}