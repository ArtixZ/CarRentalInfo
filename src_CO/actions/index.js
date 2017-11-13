import moment from 'moment';

import { callAPI } from './Utils';
import {
    TOP_STORY,
    ARCHIVE_STORY,
    GET_SEARCH
} from './consts';

const curYear = moment().year();
const curMonth = moment().month()+1;
