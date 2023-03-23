import axios from 'axios';

// need to change base path at some poibnt
export async function loginApi({ email, password }) {
  const { token } = await axios
    .post('http://localhost:4001/login', { email, password })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return token;
}
