import { FC, memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { homeRoutes } from "../router/HomeRoutes";

export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route>
        {homeRoutes.map((route) => (
          <Route path={route.path} element={route.children}></Route>
        ))}
      </Route>
    </Routes>
  );
});
