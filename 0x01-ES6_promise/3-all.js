import {
  uploadPhoto,
  createUser,
} from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const { body } = response.shift();
      const { firstName, lastName } = response.pop();
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
