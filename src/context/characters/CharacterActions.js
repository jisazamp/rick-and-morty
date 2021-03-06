const API_URL = import.meta.env.VITE_API_URL;

// Get characters
export const getCharacters = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}/character/?page=${page}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Get characters based on status
export const getCharactersStatus = async (status) => {
  try {
    const response = await fetch(`${API_URL}/character/?status=${status}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

// Search characters by name
export const searchCharacterByName = async (name) => {
  try {
    const response = await fetch(`${API_URL}/character/?name=${name}`);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
