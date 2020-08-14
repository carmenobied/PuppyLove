import axios from "axios";

const BASEURL = "https://dog.ceo/api/breeds/list" 

export default {
  getPuppyList: () => {
    return axios.get(BASEURL);
  }
};