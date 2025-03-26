import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";

import { AboutPageLazy } from "./pages/AboutPage/AboutPageLazy";
import { MainPageLazy } from "./pages/MainPage/MainPageLazy";

import { classNames } from "./helpers/classNames/classNames";
import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Link to={"/"}>Главная страница</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPageLazy />} />
        </Routes>
      </Suspense>
      <Counter />
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};
