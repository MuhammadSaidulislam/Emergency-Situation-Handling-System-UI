import React from "react";
import { Footer } from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

export const Layout = ({
  title = "Title",
  description = "Description",
  src = "",
  children,
  className,
}) => {
  return (
    <>
      <Navigation />
      <div className={className}>{children}</div>
      <Footer />
    </>
  );
};
