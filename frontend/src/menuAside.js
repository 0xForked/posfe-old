import {
  // mdiAccountCircle,
  mdiMonitor,
  // mdiLock,
  // mdiAlertCircle,
  // mdiSquareEditOutline,
  mdiTable,
  // mdiViewList,
  // mdiTelevisionGuide,
  // mdiResponsive,
  // mdiPalette,
  mdiHome
} from "@mdi/js";

export default [
  {
    to: "/home",
    label: "Home",
    icon: mdiHome,
  },
  {
    icon: mdiMonitor,
    label: "Dashboard",
    menu: [
      {
        to: "/dashboard/sales",
        label: "Sales",
      },
      {
        to: "/dashboard/products",
        label: "Products",
      },
      {
        to: "/dashboard/customers",
        label: "Products",
      },
    ],
  },
  {
    to: "/transactions",
    icon: mdiMonitor,
    label: "Transactions",
  },
  {
    icon: mdiMonitor,
    label: "Catalogs",
    menu: [
      {
        to: "/catalogs/categories",
        label: "Categories",
      },
      {
        to: "/catalogs/products",
        label: "Products",
      },
    ],
  },
  {
    icon: mdiMonitor,
    label: "Buildings",
    menu: [
      {
        to: "/buildings/floors",
        label: "Floors",
      },
      {
        to: "/buildings/floors",
        label: "Rooms & Table",
      },
    ],
  },
  {
    icon: mdiMonitor,
    label: "Accounts",
    menu: [
      {
        to: "/accounts/users",
        label: "Users",
      },
      {
        to: "/accounts/roles",
        label: "Roles",
      },
    ],
  },
  {
    to: "/settings",
    label: "Settings",
    icon: mdiTable,
  },
  {
    to: "/tables",
    label: "Tables",
    icon: mdiTable,
  },
];

// {
//   to: "/forms",
//   label: "Forms",
//   icon: mdiSquareEditOutline,
// },
// {
//   to: "/ui",
//   label: "UI",
//   icon: mdiTelevisionGuide,
// },
// {
//   to: "/responsive",
//   label: "Responsive",
//   icon: mdiResponsive,
// },
// {
//   to: "/",
//   label: "Styles",
//   icon: mdiPalette,
// },
// {
//   to: "/profile",
//   label: "Profile",
//   icon: mdiAccountCircle,
// },
// {
//   to: "/login",
//   label: "Login",
//   icon: mdiLock,
// },
// {
//   to: "/error",
//   label: "Error",
//   icon: mdiAlertCircle,
// },
// {
//   label: "Dropdown",
//   icon: mdiViewList,
//   menu: [
//     {
//       label: "Item One",
//     },
//     {
//       label: "Item Two",
//     },
//   ],
// },