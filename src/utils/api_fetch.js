import axios from "axios";

export default axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    }
});



// import fetch from "isomorphic-fetch";

// // http://stg-mesoss105.phonepe.nm2:31975

// // http://valhalla-v2.traefik.stg.phonepe.com

// const DEV_END_POINT = "https://jsonplaceholder.typicode.com";
// const testing = true;

// const apiFetch = {
//     post(endpoint, body = {}) {
//         return this._makeRequest({
//             method: "POST",
//             endpoint,
//             body
//         });
//     },

//     put(endpoint, body = {}) {
//         return this._makeRequest({
//             method: "PUT",
//             endpoint,
//             body
//         });
//     },

//     get(endpoint, body = {}) {
//         return this._makeRequest({
//             method: "GET",
//             endpoint,
//             body
//         });
//     },

//     getEndPoint(endpoint) {
//         if (process.env.NODE_ENV === "development") {
//             return `${DEV_END_POINT}/${endpoint}`;
//         } else {
//             let url = `${testing ? "http://localhost:9080" : ""}/${endpoint}`;
//             return url;
//         }
//     },

//     _makeRequest({ method, endpoint, body = {}, parseJson = true }) {
//         let url = this.getEndPoint(endpoint);



//         if (method === "GET") {
//             if (Object.keys(body).length > 0) {
//                 var esc = encodeURIComponent;
//                 var query = Object.keys(body)
//                     .map(k => esc(k) + "=" + esc(body[k]))
//                     .join("&");
//                 url += `?${query}`;
//             }
//         } else {
//             body = JSON.stringify(body);
//         }

//         let promise = fetch(url).then(this._checkStatus);
//         if (parseJson) {
//             promise = promise.then(this._parseJson);
//         }

//         return promise.then(this._logSuccess).catch(this._logError);
//     },



//     _checkStatus(response) {
//         if (response.status >= 200 && response.status < 300) {
//             return Promise.resolve(response);
//         } else {
//             return Promise.reject(response);
//         }
//     },

//     _parseJson(response) {
//         return response.json();
//     },

//     _logError(response) {
//         if (response && response.status === 401) {
//             console.debug("Unauthorized request", response);
//             return Promise.reject(response);
//         } else {
//             console.debug("Request failed", response);
//             return Promise.reject(response);
//         }
//     },

//     _logSuccess(data) {
//         console.debug("Request succeeded with JSON response", data);
//         return Promise.resolve(data);
//     }
// };

// export default apiFetch;
