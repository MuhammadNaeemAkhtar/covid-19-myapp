import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const getData = async(country) => {
    let changeableUrl = url;

    if(country) {
        changeableUrl = `${changeableUrl}/countries/${country}`
    }

    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(changeableUrl);
        const modifiedData = {
            confirmed,
            recovered,
            deaths,
            lastUpdate,
        };
        return modifiedData;
    } catch(error) {
        console.log(error);
    }
}

export const getDailyData = async() => {
    try {
        const { data } = await Axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
        //console.log(modifiedData);
        return modifiedData;
    } catch(error) {
        console.log(error);
    }
}

export const getCountries = async() => {
    try {
        const { data: {countries} } = await Axios.get(`${url}/countries`);
        
        return countries.map((country) => country.name);
    } catch(error) {
        console.log(error);
    }
}