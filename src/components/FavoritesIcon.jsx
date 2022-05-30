import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../redux/features/bookSlices";
import { useNavigate } from "react-router-dom";

const FavoriteIcon = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addFavOne = () => {
    dispatch(addFav({ ...item, isFav: true }));
    navigate("/favorites");
  };

  const removeFavOne = () => {
    dispatch(removeFav({ ...item }));
  };

  return (
    <>
      {item.isFav ? (
        <FontAwesomeIcon
          icon={faStar}
          onClick={removeFavOne}
          style={{ color: "orange" }}
        />
      ) : (
        <FontAwesomeIcon
          icon={faStar}
          onClick={addFavOne}
          style={{ color: "grey" }}
        />
      )}
    </>
  );
};

export default FavoriteIcon;
