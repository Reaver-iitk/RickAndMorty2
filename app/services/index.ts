import { fetchCharacter } from './fetchCharacter';
import { fetchCharacters } from './fetchCharacters';

class CharactersServices {
  fetchCharactersService = (page: number) => fetchCharacters(page);
}

const charactersServices = new CharactersServices();

class CharacterServices {
  fetchCharacterService = (id: number) => fetchCharacter(id);
}

const characterServices = new CharacterServices();

export { charactersServices, characterServices };
