import React from "react";

const AcceptTast = ({data}) => {
  return (
    <div className="h-full flex-shrink-0 w-[400px] p-5 bg-violet-600 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
      {data.taskDescription}
      </p>
      <div className="flex justify-between mt-16">
        <button className="bg-green-500 py-2 px-3 text-[18px] rounded-sm">Mark as Completed</button>
        <button className="bg-red-500 py-2 px-3 text-[18px] rounded-sm">Mark as failed</button>
      </div>
    </div>
  );
};

export default AcceptTast;
