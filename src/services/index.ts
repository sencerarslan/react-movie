import axios from 'axios';

export const omdbClient = axios.create({
    baseURL: `${process.env.REACT_APP_OMDB_BASE_URL}`,
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
    },
});
