import { createRouter, createWebHashHistory } from "vue-router";
import Loader from "@/Views/LoaderView.vue";
import Home from "@/views/HomeView.vue";
import DashboardSales from "@/views/dashboard/SalesView.vue";
import DashboardProduct from "@/views/dashboard/ProductsView.vue";
import DashboardCustomer from "@/views/dashboard/CustomersView.vue";

const routes = [
  {
    path: "/",
    name: "loader",
    component: Loader,
    meta: { title: "Loader", guest: true },
  },
  {
    meta: { title: "home", requireAuth: true },
    path: "/home",
    name: "home",
    component: Home,
  },
  {
    meta: { title: "Dashboard sales", requireAuth: true },
    path: "/dashboard/sales",
    name: "dashboard.sales",
    component: DashboardSales,
  },
  {
    meta: { title: "Dashboard products", requireAuth: true },
    path: "/dashboard/products",
    name: "dashboard.products",
    component: DashboardProduct,
  },
  {
    meta: { title: "Dashboard customers", requireAuth: true },
    path: "/dashboard/customers",
    name: "dashboard.customers",
    component: DashboardCustomer,
  },
  {
    meta: { title: "Tables", requireAuth: true },
    path: "/tables",
    name: "tables",
    component: () => import("@/views/TablesView.vue"),
  },
  {
    meta: { title: "Login", guest: true },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: { title: "Error", guest: true  },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;



// {
//   meta: {
//     title: "Forms",
//   },
//   path: "/forms",
//   name: "forms",
//   component: () => import("@/views/FormsView.vue"),
// },
// {
//   meta: {
//     title: "Profile",
//   },
//   path: "/profile",
//   name: "profile",
//   component: () => import("@/views/ProfileView.vue"),
// },
// {
//   meta: {
//     title: "Ui",
//   },
//   path: "/ui",
//   name: "ui",
//   component: () => import("@/views/UiView.vue"),
// },
// {
//   meta: {
//     title: "Responsive layout",
//   },
//   path: "/responsive",
//   name: "responsive",
//   component: () => import("@/views/ResponsiveView.vue"),
// },