import React from "react";
import { useDispatch } from "react-redux";
import { uiSliceActions } from "../store/ui-slice";
import { motion } from "framer-motion";

export default function EmptyAlert() {
  const dispatch = useDispatch();

  const closeAlertHandler = () => {
    dispatch(uiSliceActions.closeEmptyAlert());
  };

  return (
    <motion.div
      initial={{
        y: "-100",
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.2,
          type: "spring",
          stiffness: 75,
        },
      }}
      className="mt-5 pl-4 py-4 bg-red-500 text-white rounded-lg flex justify-between pr-4"
    >
      <p>Can't add empty todo!</p>
      <button onClick={closeAlertHandler}>X</button>
    </motion.div>
  );
}
