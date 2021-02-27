import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID 1wGAY8hKQnnO48aZPa2uMkyFwHhJITct33WveQtJUKs",
    }
})