import axios from "axios";

export default {
    //Search game tiles according to the received theme
    searchTiles: function (theme) {
        var APIKEY = "bioSSe7tdt2zjVgAfZgThBaUxDZ6UA3K";
        return axios.get("https://api.giphy.com/v1/gifs/search?q=" +
            theme + "&api_key=" + APIKEY + "&limit=9");
    }
};
