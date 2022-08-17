const requestLogin = async (body) => {
  await fetch('http://localhost:3001/users/sign_in', {
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
  })
    .then((res) => {
      if (res.ok) {
        localStorage.setItem('token', res.headers.get('Authorization').split(' ')[1]);
        return res.json();
      }
      throw new Error(res);
    })
    .then((json) => json)
    .catch((error) => error);
};

export default requestLogin;
