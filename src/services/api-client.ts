import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'bd23d9fd963e41d988c3ce74ab1421ca'
    }
})