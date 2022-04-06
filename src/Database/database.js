class Database {
  static API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/dUOcYELpBonSfWBKhXX4/books';

  static async addBooks(id, title, author, category) {
    const bookData = {
      item_id: id,
      title,
      author,
      category,
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

  static async delBook(id) {
    const deleteBookEndpoint = `${this.API_URL}/${id}`;
    const bookData = {};
    bookData.item_id = id;

    const res = await fetch(deleteBookEndpoint, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookData),
    });

    if (res.status < 200 || res.status > 299) {
      throw new Error(
        `Book with id of ${id} not deleted`,
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
      console.log(response);
      return response;
    } catch (error) {
      throw new Error('database connection compromised');
    }
  }
}

export default Database;
