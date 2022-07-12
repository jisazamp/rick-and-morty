const API_URL = import.meta.env.VITE_API_URL;

// Get characters
export const getCharacters = async () => {
  try {
    const response = await fetch(`${API_URL}/character`);
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
