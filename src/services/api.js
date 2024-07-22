import axios from 'axios';

const baseUrl = 'http://localhost:8080';

export const authenticate = async (username, password) => {
  try {
    await axios.get(`${baseUrl}/authenticate`, {
      auth: { username, password },
      withCredentials: true
    });
    return true;
  } catch (e) {
    console.error('Authentication error:', e);
    return false;
  }
};

export const createUser = async (username, password) => {
  try {
    const options = {
      auth: {
        username: username,
        password: password
      },
      withCredentials: true
    };
    await axios.post(`${baseUrl}/users`, {}, options);
    console.log('User created successfully');
  } catch (e) {
    console.error('User creation error:', e);
  }
};

export const addItem = async (jsonObject) => {
  try {
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}/add/item`,
      data: jsonObject,
      headers: {
        'Content-Type': 'application/json',
      },
      withCredentials: true
    });
    console.log('Item added:', response.data.message);
  } catch (e) {
    console.error('Add item error:', e);
  }
};
