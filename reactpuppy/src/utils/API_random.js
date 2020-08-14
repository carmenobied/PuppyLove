import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/image/random";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  getRandomPuppy: () => {
    return axios.get(BASEURL);
  }
};

const BASEURL = "https://dog.ceo/api/breed/";

export default {
  getPuppyBreed: (query) => {
    return axios.get(BASEURL + query + "/images");
  }
};

const BASEURL = "https://dog.ceo/api/breeds/list" 

export default {
  getPuppyList: () => {
    return axios.get(BASEURL);
  }
};