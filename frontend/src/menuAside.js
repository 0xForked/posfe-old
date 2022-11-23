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
  mdiHome,
  mdiStore,
  mdiBookOpenPageVariant,
  mdiAccount,
  mdiAccountStar,
  mdiReceipt,
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
        label: "Customers",
      },
    ],
  },
  // STORE MENU
  // LIKE FLOOR, ROOMS & TABLES
  {
    to: "/stores",
    icon: mdiStore,
    label: "Stores",
  },
  {
    to: "/catalogs",
    icon: mdiBookOpenPageVariant,
    label: "Catalogs",
  },
  {
    to: "/transactions",
    icon: mdiReceipt,
    label: "Transactions",
  },
  {
    to: "/accounts",
    icon: mdiAccount,
    label: "Accounts",
  }
];
