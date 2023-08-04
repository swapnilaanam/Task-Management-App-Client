import { useForm } from "react-hook-form";

const ViewTask = ({ index, task, handleUpdateStatus, handleDeleteTask }) => {
    const { _id, taskTitle, taskDescription, taskStatus, taskDate } = task;

    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        const updatedStatus = data.taskstatus;
        handleUpdateStatus(_id, updatedStatus);
    }

    return (
        <div>
            <div className="card w-96 h-64 bg-base-100 rounded-md shadow-xl">
                <div className="bg-orange-300 ps-7 py-6 rounded-t-md">
                    <h2 className="card-title text-xl font-semibold">{taskTitle}</h2>
                    <div className="badge badge-neutral badge-md mt-2 px-4 py-3 font-medium text-white">
                        {taskStatus}
                    </div>
                </div>
                <div className="card-body py-4 pe-6">
                    <p className="text-lg font-medium">{taskDescription}</p>
                    <div className="card-actions justify-between items-center">
                        <div className="badge badge-neutral px-4 py-3 font-medium text-white">
                            {taskDate}
                        </div>
                        <div className="flex gap-3">
                            <label htmlFor={`status_${index + 1}`} className="btn btn-warning btn-sm">Edit</label>
                            <input type="checkbox" id={`status_${index + 1}`} className="modal-toggle" />
                            <div className="modal">
                                <div className="modal-box">
                                    <h3 className="font-bold text-lg">Update!</h3>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text text-lg font-semibold">Task Status: </span>
                                            </label>
                                            <select
                                                defaultValue={taskStatus}
                                                {...register("taskstatus")}
                                                className="select select-bordered"
                                            >
                                                <option>Pending</option>
                                                <option>Accepted</option>
                                                <option>In Progress</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                        <div className="form-control w-full">
                                            <input type="submit" className="btn btn-sm btn-warning mt-5" />
                                        </div>
                                    </form>
                                    <div className="modal-action">
                                        <label htmlFor={`status_${index + 1}`} className="btn btn-sm btn-error">Close</label>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleDeleteTask(_id)}
                                className="btn btn-sm bg-red-600 text-white hover:bg-red-600">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewTask;