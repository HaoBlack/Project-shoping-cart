import React from "react";
import { useAuth0 } from "../reatct-auth0-wapper";

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Loading...";
  }

  const keys = Object.keys(user);
  const trElm = keys.map((key, index) => {
    return (
      <tr key={index}>
        <td>{key.replace("_", " ")}</td>
        <td>{user[key]}</td>
      </tr>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <img src={user.picture} alt="Profile" width="25%" />
        </div>
        
        <div className="col-md-10">
          <h2>{user.name}</h2>
          <table className="table">
            <tbody>{trElm}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// {JSON.stringify(user, null, 2)}

export default Profile;
