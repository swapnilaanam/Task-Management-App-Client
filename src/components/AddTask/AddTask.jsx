import { useForm } from "react-hook-form";
import Lottie from "lottie-react";
import formAnimation from '../../assets/animation/form-animation.json';
import axios from "axios";
import Swal from "sweetalert2";

const AddTask = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        const newTask = {
            taskTitle: data.tasktitle,
            taskDescription: data.taskdescription,
            taskStatus: data.taskstatus,
            taskDate: data.taskdate
        }

        axios.post('https://task-management-app-server-xi.vercel.app/tasks', newTask)
            .then(response => {
                if (response.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Task Has Been Added...',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="w-full bg-green-50 py-14 px-4">
            <div className="max-w-5xl mx-auto bg-white border-2 border-gray-200 rounded-md flex flex-col md:flex-row justify-center items-center shadow-xl">
                <div className="w-full md:w-1/2">
                    <Lottie animationData={formAnimation} />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full md:w-1/2 bg-orange-300 py-8 rounded-tr-md rounded-br-md">
                    <h2 className="text-2xl font-semibold text-center mb-5">Create A Task</h2>
                    <div className="space-y-2 mx-10">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Task Title: </span>
                            </label>
                            <input type="text"
                                {...register("tasktitle", { required: true })}
                                placeholder="Write Task Title..."
                                className="input input-bordered"
                            />
                            {errors.tasktitle && <span className="text-lg font-medium text-red-700 mt-3 ms-8">* Task Title is Required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Task Description: </span>
                            </label>
                            <textarea
                                {...register("taskdescription", { required: true })}
                                className="textarea textarea-bordered h-20"
                                placeholder="Write Task Description..."
                            >
                            </textarea>
                            {errors.taskdescription && <span className="text-lg font-medium text-red-700 mt-3 ms-8">* Task Description is Required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Task Status: </span>
                            </label>
                            <select
                                defaultValue={'Pending'}
                                {...register("taskstatus", { required: true })}
                                className="select select-bordered"
                            >
                                <option>Pending</option>
                                <option>Accepted</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                            {errors.taskstatus && <span className="text-lg font-medium text-red-700 mt-3 ms-8">* Task Status is required</span>}
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-lg font-semibold">Date: </span>
                            </label>
                            <input
                                type="date"
                                {...register("taskdate", { required: true })}
                                className="input input-bordered"
                            />
                            {errors.taskdate && <span className="text-lg font-medium text-red-700 mt-3 ms-8">* Task Date is required</span>}
                        </div>
                    </div>
                    <div className="form-control w-full px-20 items-center mt-7 pb-2">
                        <input
                            type="submit"
                            value="Add Task"
                            className="w-3/4 bg-green-500 text-xl font-semibold text-white py-2 px-12 rounded-md cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTask;