import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users)
  return (
    <>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>email</th>
            <th>adress</th>
          </tr>
        </thead>
        <tbody>
          {users.map((el) => (
            <>
              
              <tr>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.email}</td>
                <td>{el.address.street}</td>
              </tr>
            </>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Userlist;
