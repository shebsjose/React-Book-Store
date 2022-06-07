import BooksTable from "./BooksTable";
import Card from "./cards";
import { useSelector } from "react-redux";

const Books = () => {
  const { books, favBooks } = useSelector((state) => state.book);
  const { showFav, isGridView } = useSelector((state) => state.helper);

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
