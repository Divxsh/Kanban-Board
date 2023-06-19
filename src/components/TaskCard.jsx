import React from "react";
import Icon from "./Icon";
import Pill from "./Pill";
import { Draggable } from "react-beautiful-dnd";

const TaskCard = ({ task, id, col }) => {
  const dragId = col + "-task-" + id;
  return (
    <Draggable index={id} draggableId={dragId}>
      {(provided) => (
        <div
          className="mb-5 cursor-pointer rounded-2xl bg-white p-5"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="mb-1 flex items-center justify-between">
            <Pill status={task.priority || task.status} />
            <div className="-mt-2 cursor-pointer font-extrabold">...</div>
          </div>
          <h2 className="text-lg font-semibold text-customBlack">
            {task.title}
          </h2>
          {task?.description && (
            <div className="text-xs text-primary">{task.description}</div>
          )}
          {task?.images?.length && (
            <div>
              <div className="flex gap-x-3">
                {task.images.map((path, idx) => (
                  <img
                    src={path}
                    alt="plant"
                    style={{ width: "100%" }}
                    key={idx}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="mt-7 flex justify-between">
            <div className="flex w-fit">
              {task?.usersWorking.map((imageData, idx) => (
                <div className="-mr-2 w-6" key={idx}>
                  <img src={imageData.path} alt={imageData?.alt || "user"} />
                </div>
              ))}
            </div>
            <div className="flex gap-x-4 text-primary">
              <div className="flex cursor-pointer items-center">
                <Icon name={"message"} size={"16px"} />
                <div className="ml-1.5 text-xs font-bold">
                  12{" "}
                  <span className="md:hidden xl:inline-block ">comments</span>
                </div>
              </div>
              <div className="flex cursor-pointer items-center">
                <Icon name={"folder"} size={"16px"} />
                <div className="ml-1.5 text-xs font-bold">
                  15 <span className="md:hidden xl:inline-block ">files</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
