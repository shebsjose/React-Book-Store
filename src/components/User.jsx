import { useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

const Users = () => {
 const [loginUser, setLoginUser] = useState({});

  const user = useSelector((state) => state.user.users);
    
  useEffect(() =>{
    const user = JSON.parse(localStorage.getItem('loginUser'));
    setLoginUser(user);
  },[])
  
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      {loginUser.admin ? 
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
          {user.length > 0 &&
            user.map((item, key) => {
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
      : <p>You not an admin</p>
}
    </div>
  );
};

export default Users;
