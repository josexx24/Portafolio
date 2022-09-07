import { Navigate, Route, Routes } from "react-router-dom";
import { UserRoutes } from "../users/routes/UserRoutes";
export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/auth/*" element={<UserRoutes />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
