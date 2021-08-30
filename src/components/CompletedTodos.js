import React from "react";
import TrashIcon from "./TrashIcon";
import { useSelector, useDispatch } from "react-redux";
import { todoSliceActions } from "../store/todos-slice";
import { motion } from "framer-motion";

export default function CompleatedTodos() {
  const containerVariant = {
    hidden: {
      x: 80,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 65,
        staggerChildren: 0.1,
      },
    },
    exit: {
      x: 120,
      transition: {
        ease: "easeInOut",
      },
    },
  };

  const listVariant = {
    hidden: {
      x: 120,
    },
    visible: {
      x: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 35,
      },
    },
  };
  // aniamte stuff

  const todos = useSelector((state) => state.todos.todos);
  const completedTodos = todos.filter((todo) => todo.isCompleted === true);
  const dispatch = useDispatch();

  const removeTodoHandler = (id) => {
    dispatch(todoSliceActions.removeTodo(id));
  };

  const removeAllHandler = () => {
    dispatch(todoSliceActions.removeAll());
  };

  return (
    <>
      {!completedTodos.length ? (
        <motion.h1
          initial={{ x: "-100" }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              type: "spring",
              stiffness: 65,
              when: "beforeChildren",
            },
          }}
          className="text-lg md:text-2xl"
        >
          No compleated task
        </motion.h1>
      ) : (
        <>
          <motion.ul
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mt-8 flex flex-col gap-y-8 mb-12"
          >
            {completedTodos.map((todo) => (
              <motion.li
                variants={listVariant}
                key={todo.id}
                className="flex items-center justify-between"
              >
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="h-6 w-6 md:h-7 md:w-7"
                    defaultChecked={todo.isCompleted}
                  />
                  <p className="text-lg md:text-xl pl-2">{todo.todo}</p>
                </div>
                <button onClick={() => removeTodoHandler(todo.id)}>
                  <TrashIcon color="#BDBDBD" width="24px" heigh="24px" />
                </button>
              </motion.li>
            ))}
          </motion.ul>
          <motion.button
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.8,
              },
            }}
            onClick={removeAllHandler}
            className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 flex rounded-md float-right items-center"
          >
            <TrashIcon color="#FFFFFF" width="18px" heigh="18px" />
            delete all
          </motion.button>
        </>
      )}
    </>
  );
}
