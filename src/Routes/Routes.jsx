import { createBrowserRouter } from "react-router-dom";
import ViewTasks from "../components/ViewTasks/ViewTasks";
import Main from "../Layouts/Main";
import AddTask from "../components/AddTask/AddTask";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <ViewTasks />
            },
            {
                path: '/addtask',
                element: <AddTask />
            }
        ]
    }
])

export default router;