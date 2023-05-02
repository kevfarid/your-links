import Axios from 'core/Axios';

export function addLink({ name, url }) {
  return Axios.post('/links/add', { name, url })
    .then((data) => {
      console.log(data);
      return data.data;
    })
    .then(({ data, message }) => {
      if (message !== 'success') throw new Error(message);
      console.log(data);
      return data;
    });
}
