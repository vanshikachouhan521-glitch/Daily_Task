import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../ChildComponants/UserList";


const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>User Data</h2>
      <UserList users={users} />
    </div>
  );
};

export default FetchData;