import { createBrowserRouter } from "react-router-dom";
import Master from "../../Master";
import Home from "../../Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Master />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])