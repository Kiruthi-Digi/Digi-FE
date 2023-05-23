import '../App.css';
import { useEffect, useState } from 'react';
import { registerUser} from '../hooks/RegisterUser';
import { loginUser } from '../hooks/LoginUser';
import { getUsers } from '../hooks/GetUsers';
import { deleteUser } from '../hooks/DeleteUser';
import { updateUser } from '../hooks/UpdateUser';

function App() {
  const [user, setUsers] = useState([]);
  const [uEmail, setEmail] = useState("");


const getUsrs = async () => {
  try {
      const res = await getUsers();
      setUsers(res);
  } catch (err) {
      console.error(err);
  }
};

  //Run names Function when page loads
  useEffect(() => {
    getUsrs();
  }, [])

  const handleChange = e => { setEmail(e.target.value) }

  return (
    <div>
      <div>
            <h3>Update a User in DB</h3>
        </div>
        
        <div>
            <button onClick={updateUser}>Update User</button>
        </div>


<div>
            <h3>Delete a User in DB</h3>
        </div>
        
        <div>
            <button onClick={deleteUser}>Delete User</button>
        </div>


      <h1>Users in our DB</h1>

      <form onSubmit={registerUser}>
        <label>
          Enter user Email <input type="text" value={uEmail} onChange={handleChange} />
        </label>
        <br />
        <button type="submit"> Register user</button>
      </form>

      <h5>First name: {uEmail} </h5>
      {
        user.map((usr) => {
          const {
            email,
            password,
            active,
            role,
            permission
          } = usr;
          return (
            <ul>
              <li>User {email} {password} {active} {role} {role}</li>
            </ul>
          )
        }
        )}

    </div>
  );
} export default App  