/* eslint-disable no-unused-expressions */
/* eslint-disable consistent-return */
const signUp = async (body) => {
  const res = await fetch('https://bstorecms.herokuapp.com/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: body.email,
        password: body.password,
        password_confirmation: body.password_confirmation,
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
    (err) => console.error(err);
  }
};

export default signUp;
