import React from "react";

const Task = (
    {
        taskName,
        description,
        icon,
        selected,
        setTask
    }
) =>
{
    const onClick = () => {
        setTask(taskName);
    }
    return (
        <button onClick={onClick} className={`w-48 border h-36 rounded-md ${selected ? "bg-zinc-800 border-transparent": "bg-transparent border-black"} p-2 text-sm font-semibold`}>
            <span>
                {description}
            </span>
        </button>
    )
}

export default Task;

// TODO: animate border on hover, etc.