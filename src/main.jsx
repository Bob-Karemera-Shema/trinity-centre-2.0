import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { openSidebar } from './redux/reducers';
import Home from "./pages/Home";
import Baristas from "./pages/Baristas";
import Conference from "./pages/Conference";
import Science from "./pages/Science";
import Barbers from "./pages/Barbers";
import './index.css';

const store = configureStore({
  reducer: {
    openSidebar: openSidebar
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/trinity-baristas",
    element: <Baristas />,
  },
  {
    path: "/waterside-suite",
    element: <Conference />,
  },
  {
    path: "/cambridge-science-centre",
    element: <Science />,
  },
  {
    path: "/park-barbers",
    element: <Barbers />,
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
