import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./components/home";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Nav /> <Home /> <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
