import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { todoSliceActions } from "../store/todos-slice";
import { uiSliceActions } from "../store/ui-slice";
import { v4 as uuidv4 } from "uuid";
import { motion } from "framer-motion";

export default function AddNewTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const inputHanlder = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input.trim().length) {
      dispatch(uiSliceActions.showEmptyAlert());
      return;
    }
    dispatch(uiSliceActions.closeEmptyAlert());
    dispatch(todoSliceActions.addNewTodo({ id: uuidv4(), todo: input }));
    setInput("");
  };

  return (
    <motion.form
      initial={{
        x: "-100",
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 40,
          when: "beforeChildren",
        },
      }}
      className="flex gap-x-2 md:gap-x-8"
      onSubmit={submitHandler}
    >
      <input
        className="w-10/12 border-2 border-gray-300 py-2 md:py-4 rounded-xl pl-4 outline-none focus:border-gray-400 transition-all"
        type="text"
        placeholder="add details"
        value={input}
        onChange={inputHanlder}
      />
      <motion.button
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
          },
        }}
        className="bg-blue-500 w-2/12 rounded-xl hover:bg-blue-600 transition-all text-white"
      >
        Add
      </motion.button>
    </motion.form>
  );
}
