import AddDivision from "@/pages/Admin/AddDivision";
import AddTour from "@/pages/Admin/AddTour";
import AddTourType from "@/pages/Admin/AddTourType";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

//  sob load atkanor jonno
const Analytics = lazy(()=>import("@/pages/Admin/Analytics"))



export const adminSidebarItems :ISidebarItem[] = [
    {
      title: "Dashboard",
      items: [
        {
          title: "Analytics",
          url: "/admin/analytics",
          Component:Analytics
        },
     
      ],
    },
    {
      title: "Tour-Management",
      items: [
        {
          title: "Add Tour",
          url: "/admin/add-tour",
          Component:AddTour

        },
        {
          title: "Add TourType",
          url: "/admin/add-tourType",
          Component:AddTourType
        },
        {
          title: "Add Division",
          url: "/admin/add-division",
          Component:AddDivision
        },
     
      ],
    },

  ]