import React, { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
