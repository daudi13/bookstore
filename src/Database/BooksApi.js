export const postBooks = async (body, user_id) => {
  await fetch(`http://localhost:3001/users/${user_id}/books`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      book: {
        title: body.title,
        author: body.author,
        genre: body.genre,
        user_id,
        current_chapter: body.current_chapter,
        total_chapters: body.total_chapters,
      },
    }),
  });
};
