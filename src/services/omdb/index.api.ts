import { omdbClient } from '..';
class OmdbService {
    async Movie(data: { search: string; type: string }) {
        const response = await omdbClient.get(`?apikey=1a7c23b9&s=${data.search}&page=1&type=${data.type}`);
        return response.data;
    }
}

const omdbService = new OmdbService();

export default omdbService;
