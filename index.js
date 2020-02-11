const axios = require("axios");

module.exports = {
    getTrainerData: async function(trainerName){
        trainerName = trainerName[0].toUpperCase() + trainerName.substring(1,trainerName.length);
        return axios.get("https://pokemasdata.s3.amazonaws.com/trainers/" + trainerName + ".json")
    }
};
