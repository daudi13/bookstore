/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
const requestLogin = async (body) => {
  const res = await fetch('https://bstorecms.herokuapp.com/users/sign_in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: body.email,
        password: body.password,
      },
    }),
  });
  try {
    if (res.ok) {
      localStorage.setItem('token', res.headers.get('Authorization').split(' ')[1]);
      const data = await res.json();
      return data;
    }
  } catch (error) {
    (err) => err;
  }
};

export default requestLogin;
