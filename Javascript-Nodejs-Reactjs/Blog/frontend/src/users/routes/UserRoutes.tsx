import { Navigate, Route, Routes } from "react-router-dom";
import { UserListPage } from "../pages/UserListPage";
import { UserLoginPage } from "../pages/UserLoginPage";
import { UserRegisterPage } from "../pages/UserRegisterPage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<UserRegisterPage />} />
      <Route path="/login" element={<UserLoginPage />} />
      <Route path="/list" element={<UserListPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};