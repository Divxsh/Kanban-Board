import React, { useState } from "react";
import Icon from "./Icon";
import TaskCard from "./TaskCard";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import {
  todos as Todos,
  progressTasks as ProgressTasks,
  completedTasks as CompletedTasks,
} from "../constant/data.js";

const queryAttr = "data-rbd-drag-handle-draggable-id";

const Main = () => {
  const [placeholderProps, setPlaceholderProps] = useState({});
  const [data, setData] = useState({
    todo: Todos,
    progress: ProgressTasks,
    done: CompletedTasks,
  });

  const handleDragStart = (update) => {
    const draggedDOM = getDraggedDom(update.draggableId);
    if (!draggedDOM) {
      return;
    }
    const { clientHeight, clientWidth } = draggedDOM;
    let ParentNode = draggedDOM.parentElement.getBoundingClientRect();

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY: draggedDOM.getBoundingClientRect().y,
      clientX:
        ParentNode.x +
        parseInt(
          window
            .getComputedStyle(draggedDOM.parentElement)
            .paddingLeft.split("px")[0]
        ),
    });
  };

  const handleDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return 0;
    if (source.droppableId === destination.droppableId) {
      setData((prev) => {
        const draggedItem = prev[source.droppableId][source.index];
        prev[source.droppableId].splice(source.index, 1);
        prev[destination.droppableId].splice(destination.index, 0, draggedItem);
        return prev;
      });
    }
    if (source.droppableId !== destination.droppableId) {
      setData((prev) => {
        const draggedItem = prev[source.droppableId][source.index];
        prev[source.droppableId].splice(source.index, 1);
        prev[destination.droppableId].splice(destination.index, 0, draggedItem);
        return prev;
      });
    }
    setPlaceholderProps({});
  };

  const handleDragUpdate = (event) => {
    setPlaceholderProps({});
  };

  const getDraggedDom = (draggableId) => {
    const domQuery = `[${queryAttr}='${draggableId}']`;
    const draggedDOM = document.querySelector(domQuery);

    return draggedDOM;
  };

  return (
    <div className="flex w-full flex-col px-6 pb-5 pt-5 md:px-12 md:pb-0">
      {/*  */}
      <div className="flex justify-between py-5">
        {/* Heading Side */}
        <div className="flex items-center gap-x-5 ">
          <h1 className="text-4xl font-semibold leading-[55px] md:text-5xl">
            Mobile App
          </h1>
          <span className="mt-2 flex h-fit items-center gap-x-4 ">
            <Icon
              name="edit-square"
              size={"25px"}
              className={"cursor-pointer"}
            />
            <Icon name="link" size={"25px"} className={"cursor-pointer"} />
          </span>
        </div>

        {/* Multiplayer Side */}
        <div className="hidden items-center gap-x-3 md:flex">
          <div className="flex items-center gap-x-2">
            <Icon
              name="add-square-filled"
              size={"15px"}
              className="mt-0.5 cursor-pointer"
            />
            <h4 className="cursor-pointer font-medium text-customPurple">
              Invite
            </h4>
          </div>
          <div className="flex w-fit">
            <div className="-mr-3 w-9">
              <img src="images/user1.png" alt="user" />
            </div>
            <div className="-mr-3 w-9">
              <img src="images/user2.png" alt="user" />
            </div>
            <div className="-mr-3 w-9">
              <img src="images/user3.png" alt="user" />
            </div>
            <div className="-mr-3 w-9">
              <img src="images/user4.png" alt="user" />
            </div>
            <div className="flex w-9 cursor-pointer items-center justify-center rounded-full border border-white bg-[#F4D7DA] font-medium text-[#D25B68]">
              +2
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="my-5 flex justify-between gap-x-2">
        <div className="flex gap-x-2 md:gap-x-5 ">
          {/* Filter */}
          <div className="flex h-10 cursor-pointer items-center gap-x-2 rounded-md border border-primary px-3.5 text-primary">
            <Icon name="filter" size={"16px"} />
            <span className="hidden md:block md:font-medium">Filter</span>
            <Icon name="arrow-down" size={"16px"} className={"ml-1"} />
          </div>
          {/* Calender */}
          <div className="flex h-10 cursor-pointer items-center gap-x-2 rounded-md border border-primary px-3 text-primary">
            <Icon name="calendar" size={"16px"} />
            <span className="hidden md:block md:font-medium">Today</span>
            <Icon name="arrow-down" size={"16px"} className={"ml-1"} />
          </div>
        </div>

        {/* Multiplayer Side */}
        <div className="flex items-center gap-x-2 md:gap-x-5">
          <div className="flex h-10 cursor-pointer items-center gap-x-2 rounded-md border border-primary px-4 text-primary">
            <Icon name="profile" size="16px" />
            <span className="hidden md:block md:font-medium">Share</span>
          </div>
          <div className="h-3/4 border-l border-primary"></div>
          <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md bg-customPurple">
            <Icon name="pause" size="20px" />
          </div>
          <Icon name="menu" size="21px" className={"cursor-pointer"} />
        </div>
      </div>

      {/*  */}
      <div className="grid h-full gap-4 pt-22px sm:grid-cols-1 md:grid-cols-3  ">
        <DragDropContext
          onDragStart={handleDragStart}
          onDragUpdate={handleDragUpdate}
          onDragEnd={handleDragEnd}
        >
          {/* To Do */}
          <div className="h-full rounded-2xl bg-customGray">
            <div className="mx-5 mb-2 flex flex-wrap items-center justify-between gap-x-2 border-b-3px border-customPurple pb-22px pt-5 ">
              <div className="flex flex-wrap items-center justify-start gap-x-2">
                <div className="h-2 w-2 rounded-full bg-customPurple"></div>
                <h3 className="font-medium">To Do</h3>
                <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium text-[#625F6D]">
                  {data["todo"]?.length}
                </div>
              </div>
              <Icon
                name={"add-square-filled"}
                size={"20px"}
                className={"cursor-pointer"}
              />
            </div>
            <Droppable droppableId="todo">
              {(provided) => (
                <div
                  className="p-5  sm:overflow-y-auto"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {data["todo"].map((i, idx) => (
                    <TaskCard
                      task={i}
                      key={idx + "todo"}
                      id={idx}
                      col={"todo"}
                    />
                  ))}
                  {provided.placeholder}
                  <div
                    className={`absolute rounded-2xl border border-dashed  border-[rgba(80,48,229,0.59)] bg-[rgba(81,48,229,0.06)] top-[${placeholderProps.top}] mb-4`}
                    style={{
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      width: placeholderProps.clientWidth,
                    }}
                  />
                </div>
              )}
            </Droppable>
          </div>

          {/* On Progress */}
          <div className="h-full rounded-2xl bg-customGray">
            <div className="mx-5 mb-2 flex items-center gap-x-2 border-b-3px border-[#FFA500] pb-22px pt-5">
              <div className="h-2 w-2 rounded-full bg-[#FFA500]"></div>
              <h3 className="font-medium">On Progress</h3>
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium text-[#625F6D]">
                {data["progress"]?.length}
              </div>
            </div>
            <Droppable droppableId="progress">
              {(provided) => (
                <div
                  className="p-5  sm:overflow-y-auto"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {data["progress"].map((i, idx) => (
                    <TaskCard
                      task={i}
                      key={idx + "progress"}
                      id={idx}
                      col={"progress"}
                    />
                  ))}
                  {provided.placeholder}
                  <div
                    className={`absolute mb-4 rounded-2xl border  border-dashed border-[rgba(80,48,229,0.59)] bg-[rgba(81,48,229,0.06)]`}
                    style={{
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      width: placeholderProps.clientWidth,
                    }}
                  ></div>
                </div>
              )}
            </Droppable>
          </div>

          {/* Done */}
          <div className="h-full rounded-2xl bg-customGray ">
            <div className="mx-5 mb-2 flex items-center gap-x-2 border-b-3px border-[#8BC48A] pb-22px pt-5">
              <div className="h-2 w-2 rounded-full bg-[#8BC48A]"></div>
              <h3 className="font-medium">Done</h3>
              <div className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E0E0E0] text-xs font-medium text-[#625F6D]">
                {data["done"]?.length}
              </div>
            </div>
            <Droppable droppableId="done">
              {(provided) => (
                <div
                  className="p-5 sm:overflow-y-auto "
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  {data["done"].map((i, idx) => (
                    <TaskCard
                      task={i}
                      key={idx + "done"}
                      id={idx}
                      col={"done"}
                    />
                  ))}
                  {provided.placeholder}
                  <div
                    className={`absolute rounded-2xl border border-dashed  border-[rgba(80,48,229,0.59)] bg-[rgba(81,48,229,0.06)] top-[${placeholderProps.top}] `}
                    style={{
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      width: placeholderProps.clientWidth,
                    }}
                  />
                </div>
              )}
            </Droppable>
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Main;
