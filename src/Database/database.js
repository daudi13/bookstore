class BookStoreAPI {
  static API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dUOcYELpBonSfWBKhXX4/books';

  static async addBooks(id, title, author) {
    const bookData = {
      item_id: id,
      title,
      author,
    };

    const res = await fetch(this.API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (res.status < 200 || res.status > 299) {
      throw new Error(
        `book with id:${id} not added`,
      );
    }
  }

  static async getbooks() {
    const res = await fetch(this.API_URL);

    if (res.status !== 200) {
      throw new Error(
        'Error fethching books',
      );
    }
    try {
      const response = await res.json();
      return response;
    } catch (error) {
      throw new Error('database connection compromised');
    }
  }
}

export default BookStoreAPI;
