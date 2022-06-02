import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addFav, removeFav } from "../redux/features/bookSlices";
import Tippy from '@tippyjs/react';
import { useSelector } from 'react-redux';

const FavoriteIcon = ({ item }) => {
  const dispatch = useDispatch();

  const showFav = useSelector((state) => state.helper.showFav)

  const handleClick = () => {
    item.isFav
      ? dispatch(removeFav({ ...item }))
      : dispatch(addFav({ ...item, isFav: true }));
  };

  return (
   <Tippy content={`${showFav ? 'Remove from favorite' : 'Add to favorite'}`}>
      <span>
      <FontAwesomeIcon className="cursor-pointer "
       icon={faStar}
       onClick={handleClick}
       style={{ color: `${item.isFav ? "orange" : "grey"}` }}
     />
      </span>
   </Tippy>
  );
};

export default FavoriteIcon;
