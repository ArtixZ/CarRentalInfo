import moment from 'moment';

import { callAPI } from './Utils';
import {
    TOP_STORY,
    ARCHIVE_STORY,
    GET_SEARCH
} from './consts';

const curYear = moment().year();
const curMonth = moment().month()+1;

const APIKey = "s9fen76swqufsd6ht4qacsnh";
const baseURL = "http://api.hotwire.com/v1/search/car";

// example :
// http://api.hotwire.com/v1/search/car?apikey=&dest=LAX&startdate=11/10/2017&enddate=11/11/2017&pickuptime=10:00&dropofftime=13:30
// Date Format: 11/10/2017
// Time Format: 13:30

export const getCarRentalInfo = ( dateRange, loc ) => {
    return(dispatch) => {
        const startDateTime = dateRange[0];
        const endDateTime = dateRange[1];
        const url = `${baseURL}?apikey=${APIKey}&dest=${loc}&startdate=${startDateTime.format('MM/DD/YYYY')}&enddate=${endDateTime.format('MM/DD/YYYY')}&pickuptime=${startDateTime.format("HH:mm")}&dropofftime=${endDateTime.format("HH:mm")}`
        callAPI('GET', url)
        .then(res => {
            console.log(res)
        })
    }
    
}