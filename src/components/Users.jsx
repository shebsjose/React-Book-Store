import { useSelector } from "react-redux";

const Users = () => {
  const { loginUser, users } = useSelector((state) => state.user);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:bg-slate-800 dark:text-gray-400">
      {loginUser.isAdmin && (
        <table className="w-full dark:bg-slate-800  text-sm text-left text-gray-600 dark:text-gray-400">
          <thead className="text-xs text-orange-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Admin
              </th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((item, key) => {
                return (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={key}
                  >
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{`${item?.isAdmin}`}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
