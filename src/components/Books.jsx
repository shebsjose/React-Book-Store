import BooksTable from "./BooksTable";
import { useSelector } from "react-redux";

const Books = () => {
  const { books, favBooks } = useSelector((state) => state.book);

  const showFav = useSelector((state) => state.helper.showFav);

  return <BooksTable data={showFav ? favBooks : books} showFav={showFav} />;
};
export default Books;
