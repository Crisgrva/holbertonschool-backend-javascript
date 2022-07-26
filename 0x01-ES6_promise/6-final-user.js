import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUp = signUpUser(firstName, lastName);
  const photoProfile = uploadPhoto(fileName);

  return Promise.allSettled([signUp, photoProfile]).then((responses) => {
    const promises = responses.map((response) => {
      if (response.status === 'fulfilled') return response;
      return { status: response.status, value: `${response.reason}` };
    });
    return promises;
  });
}
