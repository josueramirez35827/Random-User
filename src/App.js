import { useEffect, useState } from 'react';
import './App.css';
import Header from "./components/Header";
import fetchUser from './services/rando_user';
import UserSummary from './components/UserSummary';

function App() {

  const [currentUser, setCurrentUser] = useState(null);

  const refreshUser = async () => {
    const res = await fetchUser()
    setCurrentUser(res.results[0])
    console.log(currentUser)
  }

  useEffect(() => {
    refreshUser()
  }, [])

  return (
    <div className="App">
      <Header />
      <button onClick={refreshUser}>Click Me!</button>

      <UserSummary
        userData={currentUser} />
    </div>
  );
}

export default App;
