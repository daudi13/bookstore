import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const postBook = createAsyncThunk('books/postbooks', async (body, user_id) => {
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
});

export const getBooks = createAsyncThunk('books/getBooks', async (user_id) => {
  const res = await fetch(`http://localhost:3001/users/${user_id}/books`)
  const data = await res.json();
  return data
})

export const deleteBook = createAsyncThunk('books/deleteBook', async (user_id) => {
  const res = await fetch(`http://localhost:3001/users/${user_id}/books`, {
    method: 'DELETE',
    header: { 'Content-Type': 'application/json' }
  })

  const data = res.json();
  return Number(data) //get to the bottom of this
})

export const updateBook = createAsyncThunk('books/updateBook', async (body, user_id) => {
  const res = await fetch(`http://localhost:3001/users/${user_id}/books`, {
    method: 'PUTS',
    headers: {
      'Content-Type': 'application/json'
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
    })
  })

  const data = await res.json()
  return data
})