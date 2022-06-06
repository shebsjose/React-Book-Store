import BooksTable from "./BooksTable";
import Card from "./cards";
import { setBooks } from "../redux/features/bookSlices";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const Books = () => {
  const dispatch = useDispatch();

  const { books, favBooks } = useSelector((state) => state.book);
  const { showFav, isGridView } = useSelector((state) => state.helper);

  const handleApi = async () => {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    dispatch(setBooks(data));
  };

  useEffect(() => {
    handleApi();
  }, []);

  return (
    <>
      {isGridView ? (
        <Card />
      ) : (
        <BooksTable data={showFav ? favBooks : books} showFav={showFav} />
      )}
    </>
  );
};
export default Books;
