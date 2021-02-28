
import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers: {
        Authorization: "Client-ID GA3NxbZSBav__Emflcfq1z6m0dsCHsK8R1BQsW8klW4",
    }
})