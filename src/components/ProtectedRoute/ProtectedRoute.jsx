import React, { useContext, useEffect } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, onOpenModal, isCheckingAuth }) {
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!isCheckingAuth && !currentUser) {
      onOpenModal();
    }
  }, [isCheckingAuth, currentUser]);

  if (isCheckingAuth === true) {
    return null;
  } else {
    if (currentUser) {
      return children;
    } else {
      return <Navigate to="/" />;
    }
  }
}

export default ProtectedRoute;
