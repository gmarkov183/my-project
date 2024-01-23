import { useEffect, useState } from "react";
import { Book } from "./Book";

export const BookList = () => {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetch("https://mega-books-default-rtdb.firebaseio.com/.json")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result.map((x) => <Book key={x.id} {...x} />));
      });
  }, []);

  return <ul>
    {books || 'Loading...'}
  </ul>;
};
