
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Favorites from "./Favorites";


const Books = () => {
 
  const books = useSelector((state) => state.book.books);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
 
      <table className="w-full dark:bg-slate-800  text-sm text-left text-gray-600 dark:text-gray-400">
        <thead className="text-xs text-orange-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Author
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
  
            <th scope="col" className="px-6 py-3">
              favorites
            </th>
          </tr>
        </thead>
        <tbody>
          {books.length > 0 &&
            books.map((item) => {
              return (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={item.id}
                >
                  <td className="px-6 py-4">{item.name}</td>
                  <td className="px-6 py-4">{item.username}</td>
                  <td className="px-6 py-4">{item.email}</td>
                  <td className="px-6 py-4">{item.address.city}</td>
                  <td className="px-6 py-4">
                    <Link to={`/details/${item.id}`}>
                      <FontAwesomeIcon
                        className="inline-block px-6 py-2 border-2 border-orange-600 text-orange-600 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        icon={faEye}
                      />
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <Favorites item={item} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
