import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: 'Client-ID SNlcOQ5p1XHUVODycXvWpUvyb-5VHJLqxDFv64nwmco'
    }
});