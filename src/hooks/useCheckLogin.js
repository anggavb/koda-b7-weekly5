import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

const useCheckLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { users, userIdLoggedIn } = useSelector((state) => state.users);

  useEffect(() => {
    if (!users.some((user) => user.id === userIdLoggedIn)) {
      if (location.pathname.includes("admin")) {
        return navigate("/", { replace: true });
      }
      return;
    }
    return navigate("/admin", { replace: true });
  }, [users, userIdLoggedIn, navigate, location.pathname]);
}

export default useCheckLogin