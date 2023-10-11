import React from "react";
import MainPage from "../pages/MainPage/MainPage";
import BookDetailPage from "../pages/BookDetailPage/BookDetailPage";

const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/books/",
    element: <BookDetailPage />,
  },
];

export default routes;
