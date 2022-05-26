import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users/" + id)
      .then((res) => setDetails(res.data))
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <div className="bg-white p-5 max-w-md mx-auto rounded shadow-sm">
      <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
        <div className="flex justify-center md:justify-end -mt-16">
          <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
        </div>
        <div>
          <h2 className="text-gray-800 text-3xl font-semibold">Details Page</h2>
          <p className="mt-2 text-gray-600 text-xl font-medium text-indigo-500">{details?.name}</p>
          <p className="mt-2 text-gray-600">{details?.email}</p>
          <p className="mt-2 text-gray-600">{details?.address?.city}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
