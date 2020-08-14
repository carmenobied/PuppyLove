import axios from "axios";

const BASEURL = "https://dog.ceo/api/breed/";

export default {
  getPuppyBreed: (query) => {
    return axios.get(BASEURL + query + "/images");
  }
};