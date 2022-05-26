import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addFav } from "../redux/features/bookSlices";

const Favorites = ({item }) => {
  const dispatch = useDispatch();
  const addFavList = () => {
    dispatch(addFav({...item, isFav:true}));
  };

  return (
    <>
           <FontAwesomeIcon
           icon={faStar}
           onClick={() => addFavList()}
         />
   
       
    </>
  );
};

export default Favorites;