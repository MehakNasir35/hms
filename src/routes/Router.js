import { lazy } from "react";
import RoomManagement from "../views/RoomManagement.js";
import BuildingMap from "../views/BuildingMap.js";
import StudentInformation from "../views/StudentInformation.js";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));

/*****Routes******/

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      { path: "/", exact: true, element: <Starter /> },
      { path: "/roomManagement", exact: true, element: <RoomManagement /> },
      { path: "/buildingMap", exact: true, element: <BuildingMap /> },
      { path: "/studentInformation", exact: true, element: <StudentInformation /> },
    ],
  },

];

export default ThemeRoutes;
