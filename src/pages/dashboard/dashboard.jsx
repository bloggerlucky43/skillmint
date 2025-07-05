import { useState } from "react";

import "./dashboard.css";
import Layout from "./layout";
import BalanceBoard from "./balance/balance";
import Section from "../sections/section";
import ListOfCourses from "./courses/listofcourses";
const Dashboard = () => {
  return (
    <>
      <Layout />
      {/* <BalanceBoard /> */}
      <ListOfCourses />
      {/* <Section /> */}
    </>
  );
};

export default Dashboard;
