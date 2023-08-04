import { useQuery } from "@tanstack/react-query";
import Navbar from "../Shared/Navbar/Navbar";
import axios from "axios";
import ViewTask from "./ViewTask";
import Swal from "sweetalert2";

const ViewTasks = () => {
    const { data: tasks = [], refetch } = useQuery({
        queryKey: ['tasks'],
        queryFn: async () => {
            const response = await axios.get('https://task-management-app-server-xi.vercel.app/tasks');
            return response.data;
        }
    });

    const handleUpdateStatus = (id, status) => {
        console.log(status);
        axios.patch(`https://task-management-app-server-xi.vercel.app/tasks/${id}`, { updatedStatus: status })
            .then(response => {
                if (response.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Task Status Has Been Updated...',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
            .catch(error => console.log(error));
    };

    // Go in the afternoon. Buy some eggs, bananas and few blackberry.
    const handleDeleteTask = (id) => {
        axios.delete(`https://task-management-app-server-xi.vercel.app/tasks/${id}`)
            .then(response => {
                // console.log(response.data);
                if (response.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Task Has Been Deleted...',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="w-full bg-green-50 min-h-screen">
            <Navbar>View Tasks</Navbar>
            <div className="py-12 px-4 mx-auto flex flex-wrap justify-center items-center gap-7">
                {
                    tasks.map((task, index) => <ViewTask
                        key={task._id}
                        index={index}
                        task={task}
                        handleUpdateStatus={handleUpdateStatus}
                        handleDeleteTask={handleDeleteTask}
                    >
                    </ViewTask>)
                }
            </div>
        </div>
    );
};

export default ViewTasks;