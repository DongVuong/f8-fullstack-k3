import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DndContext,
  DragOverlay,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import Task from "../Tasks/Task";
import { createPortal } from "react-dom";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import Column from "../Column/Column";
import { todoSlice } from "../../stores/Slices/todoSlices";
const { sortColumnsData, sortTasksData } = todoSlice.actions;
function ListColumn() {
  const dispatch = useDispatch();
  const columns = useSelector((state) => state.todo.columns);
  const tasks = useSelector((state) => state.todo.tasks);
  // console.log(tasks);
  const [activeColumn, setActiveColumn] = useState(null);
  const [activeTask, setActiveTask] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  const handleDragStart = (event) => {
    if (event.active.data.current.type === "Column") {
      setActiveColumn(event.active.data.current.column);
      return;
    }

    if (event.active.data.current.type === "Task") {
      setActiveTask(event.active.data.current.task);
      return;
    }
  };

  const handleDragEnd = (event) => {
    setActiveColumn(null);
    setActiveTask(null);
    const { active, over } = event;
    if (!over) return;
    const activeId = active.id;
    const overId = over.id;

    const isActiveColumn = active.data.current.type === "Column";
    const isOverColumn = active.data.current.type === "Column";
    if (activeId === overId) return;
    if (isActiveColumn && isOverColumn) {
      const activeColumnIndex = columns.findIndex(
        (column) => column._id === activeId
      );
      const overColumnIndex = columns.findIndex(
        (column) => column._id === overId
      );
      dispatch(
        sortColumnsData(arrayMove(columns, activeColumnIndex, overColumnIndex))
      );
    }
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeTaskId = active.id;
    const overTaskId = over.id;
    if (activeTaskId === overTaskId) return;

    const isActiveTask = active.data.current.type === "Task";
    const isOverTask = over.data.current.type === "Task";

    if (!isActiveTask) return;

    // Drag a task over another task
    if (isActiveTask && isOverTask) {
      const activeIndex = tasks.findIndex((task) => task._id === activeTaskId);
      const overIndex = tasks.findIndex((task) => task._id === overTaskId);

      const newTasks = [];
      tasks.forEach((task) => {
        if (task._id === tasks[activeIndex]._id)
          newTasks.push({ ...task, column: tasks[overIndex].column });
        else newTasks.push({ ...task });
      });
      dispatch(sortTasksData(newTasks));

      dispatch(sortTasksData(arrayMove(newTasks, activeIndex, overIndex)));
    }

    // Drag a task over a column
    const isOverAColumn = over.data.current.type === "Column";
    if (isActiveTask && isOverAColumn) {
      const overColumn = over.data.current.column.column;
      const activeIndex = tasks.findIndex((task) => task._id === activeTaskId);

      const newTasks = [...tasks];
      const wantChange = {
        ...newTasks[activeIndex],
        column: overColumn,
      };
      newTasks[activeIndex] = wantChange;

      dispatch(sortTasksData(newTasks));
    }
  };

  return (
    <div className="list-column">
      <DndContext
        sensors={sensors}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragOver={handleDragOver}
      >
        <SortableContext
          items={columns.map(({ _id }) => _id)}
          strategy={horizontalListSortingStrategy}
        >
          {columns.map((column) => {
            return (
              <Column
                key={column._id}
                column={column}
                tasks={tasks.filter((task) => {
                  return task.column === column.column;
                })}
              />
            );
          })}
        </SortableContext>

        {createPortal(
          <DragOverlay>
            {activeColumn && (
              <Column
                column={activeColumn}
                tasks={tasks.filter((task) => {
                  return task.column === activeColumn.column;
                })}
              />
            )}
            {activeTask && <Task task={activeTask} />}
          </DragOverlay>,
          document.body
        )}
      </DndContext>
    </div>
  );
}

export default ListColumn;
