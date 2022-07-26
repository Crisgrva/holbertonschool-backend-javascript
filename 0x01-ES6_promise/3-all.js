import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoProfile = uploadPhoto();
  const user = createUser();

  return Promise.all([photoProfile, user])
    .then((responses) => {
      const [photoProfile, user] = responses;
      console.log(photoProfile.body, user.firstName, user.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
