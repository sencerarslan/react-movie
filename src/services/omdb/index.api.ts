import { omdbClient } from '..';
class OmdbService {
    async Movie(data: { search: string; type: string; date: string; page: string }) {
        const search = data.search ? `&s=${data.search}` : '';
        const type = data.type ? `&type=${data.type}` : '';
        // &Season=1&Episode=1
        const date = data.date ? `&y=${data.date}` : '';
        const page = data.page ? `&page=${data.page}` : '&page=1';

        const response = await omdbClient.get(`?apikey=1a7c23b9${search}${type}${date}${page}`);
        return response.data;
    }
}

const omdbService = new OmdbService();

export default omdbService;
