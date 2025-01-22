import Add from "../../pages/Add";
import Basket from "../../pages/Basket";
import Detail from "../../pages/Detail";
import Main from "../../pages/Main";
import NotFound from "../../pages/NotFound";
import Root from "../../pages/Root";
import Wishlist from "../../pages/Wishlist";



export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/:id",
                element: <Detail />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/basket",
                element: <Basket />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
]