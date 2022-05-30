import { useSelector } from "react-redux";

const FavoriteList = () => {
  const books = useSelector((state) => state.book.favBooks);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full dark:bg-slate-800  text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default FavoriteList;
