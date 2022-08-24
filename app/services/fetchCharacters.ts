import { axiosInstance as axios } from '../services/api';
import { endpoints } from '../endpoints';
import { CharactersResponse } from '../store/characters/characters.type';

const { characters: charactersUrl } = endpoints;

const fetchCharacters = async (page: number): Promise<CharactersResponse> => {
  try {
    const { data } = await axios.get<CharactersResponse>(charactersUrl, {
      params: {
        page: page.toString(),
      },
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { fetchCharacters };
