import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UserList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userObject)=> {
    console.log(userObject)
    setUsersList((previousList)=> {
      return [...previousList, userObject];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
