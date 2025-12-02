import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const Body = () => {
  const renderRoutes = (paths, element) => {
    return paths.map((path) => (
      <Route key={path} path={path} element={element} />
    ));
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default Body;
