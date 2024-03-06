import React, { useContext } from "react";
import { UserContextProvider } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContextProvider);

  if (!user) return <div>Please Login!!</div>;
  return <div>User: {user.username}</div>;
};

export default Profile;
