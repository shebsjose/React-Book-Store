import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import FavoriteIcon from "./FavoritesIcon";
import BooksTable from "./BooksTable";
import { useSelector } from "react-redux";

const Books = () => {
  const { books, favBooks } = useSelector((state) => state.book);

  const showFav = useSelector((state) => state.helper.showFav);

  return <BooksTable data={showFav ? favBooks : books} showFav={showFav} />;
};
export default Books;
