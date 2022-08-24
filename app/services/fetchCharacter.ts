import { axiosInstance as axios } from '../services/api';
import { endpoints } from '../endpoints';
import { CharacterResponse } from '../store/character/character.type';

const { characters: charactersUrl } = endpoints;

const fetchCharacter = async (id: number): Promise<CharacterResponse> => {
  try {
    const { data } = await axios.get<CharacterResponse>(
      `${charactersUrl}${id}`,
    );
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export { fetchCharacter };
