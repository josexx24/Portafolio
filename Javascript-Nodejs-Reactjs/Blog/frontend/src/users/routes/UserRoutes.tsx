import { Navigate, Route, Routes } from "react-router-dom";
import { UserRegisterPage } from "../pages/UserRegisterPage";

export const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<UserRegisterPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};