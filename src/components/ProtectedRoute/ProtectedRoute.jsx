import React, { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, onOpenModal }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!currentUser) {
      onOpenModal();
    }
  }, []);

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
}

export default ProtectedRoute;
