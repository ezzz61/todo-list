import React from "react";
import Navigation from "../Navigation";
import { motion } from "framer-motion";

export default function Layout({ location, children }) {
  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className="w-5/12 mx-auto text-center mt-8"
      >
        <h1 className="text-4xl font-bold">#todo</h1>
      </motion.header>
      <main className="w-11/12 sm:w-8/12 lg:w-5/12 mx-auto mt-14">
        <Navigation location={location} />
        <section className="mt-6">{children}</section>
      </main>
    </>
  );
}
