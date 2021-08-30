import React, { useEffect } from "react";
import AddNewTodo from "./AddNewTodo";
import { useSelector, useDispatch } from "react-redux";
import { todoSliceActions } from "../store/todos-slice";
import EmptyAlert from "./EmptyAlert";
import { motion } from "framer-motion";
import { uiSliceActions } from "../store/ui-slice";

export default function Todos({ active }) {
  const containerVariant = {
    hidden: {
      x: 80,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 65,
        staggerChildren: 0.1,
      },
    },
  };

  const listVariant = {
    hidden: {
      x: 120,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 35,
      },
    },
  };
  // aniamte stuff

  const emptyAlert = useSelector((state) => state.ui.emptyAlert);
  const todos = useSelector((state) => state.todos.todos);
  const activeTodos = todos.filter((todo) => todo.isCompleted === false);
  const dispatch = useDispatch();

  const completeHandler = (id) => {
    dispatch(todoSliceActions.completeTodo(id));
  };

  useEffect(() => {
    dispatch(uiSliceActions.closeEmptyAlert());
  }, [dispatch]);

  return (
    <>
      <AddNewTodo />
      {emptyAlert && <EmptyAlert />}
      <motion.ul
        variants={containerVariant}
        animate="visible"
        initial="hidden"
        className="mt-8 flex flex-col gap-y-8 mb-8"
      >
        {active
          ? activeTodos.map((todo) => (
              <motion.li
                variants={listVariant}
                key={todo.id}
                className="flex items-center"
              >
                <input
                  type="checkbox"
                  className="h-6 w-6 md:h-7 md:w-7"
                  defaultChecked={todo.isCompleted}
                  onClick={() => completeHandler(todo.id)}
                />
                <p className="text-lg md:text-xl pl-2">{todo.todo}</p>
              </motion.li>
            ))
          : todos.map((todo) => (
              <motion.li
                variants={listVariant}
                key={todo.id}
                className="flex items-center"
              >
                <input
                  type="checkbox"
                  className="h-6 w-6 md:h-7 md:w-7"
                  defaultChecked={todo.isCompleted}
                  onClick={() => completeHandler(todo.id)}
                />
                <p className="text-lg md:text-xl pl-2">{todo.todo}</p>
              </motion.li>
            ))}
      </motion.ul>
    </>
  );
}
