const requestLogin = async (body) => {
  console.log(body.email);
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
        console.log(res.headers.get('Authorization').split(' ')[1]);
        localStorage.setItem('token', res.headers.get('Authorization').split(' ')[1]);
        return res.json();
      }
      throw new Error(res);
    })
    .then((json) => console.dir(json))
    .catch((error) => console.error(error));
};

export default requestLogin;
