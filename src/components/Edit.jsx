import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { updateBook } from "../redux/features/bookSlices";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


const Edit = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [edit, setEdit] = useState(null);

  const { id } = useParams();
  const [details, setDetails] = useState({
    name: "",
    email: "",
    city: "",
  });


  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/" + id)
      .then(({ data }) =>
           setDetails({
          id: data.id,
          name: data.name,
          email: data.email,
          city: data?.address?.city,
        })
      )
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    dispatch(updateBook(details));
    navigate("/books");
  };
    return ( 
     <div>
          <Link to={""}>
                      <FontAwesomeIcon
                        className="inline-block px-6 py-2 border-2 border-orange-600 text-orange-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        icon={faPenToSquare}
                      />
                    </Link>
     </div>
     );
}
 
export default Edit;