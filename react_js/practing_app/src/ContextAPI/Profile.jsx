import { useContext } from "react";
import { UserContext } from "./UserContent";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h2>Profile</h2>
      <p>User: {user}</p>
      <button onClick={() => setUser("Admin")}>
        Change User
      </button>
    </>
  );
}

export default Profile;
