const signUp = async (body) => {
  const res = await fetch('http://localhost:3001/users', {
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
      console.log(res.headers.get('Authorization').split(' ')[1]);
      const data = await res.json();
      return data;
    }
  } catch (error) {
    (err) => console.error(err);
  }
};

export default signUp;
