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

  const handleApi = async() =>{
    const favIds = []
    favBooks.forEach(item => favIds.push(item.id));
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    const updatedBooks = data.map(item => {
      return (favIds.includes(item.id) ? {...item,isFav:true} : {...item,isFav:false});
    });
    dispatch(setBooks(updatedBooks));
  }

  useEffect(() => {
    handleApi();
  }, []);

  return <>
  {isGridView ? (<Card/>) : (<BooksTable data={showFav ? favBooks : books} showFav={showFav} />)}
  </>
};
export default Books;
