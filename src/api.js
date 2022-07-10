// comunicação com api
import axios from "axios";

    const api = axios.create({
        baseURL: "https://api.tvmaze.com/search/shows?q=star%wars",
    });    

export default api;