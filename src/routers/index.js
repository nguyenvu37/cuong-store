// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    title: "Admin | Store",
    component: "./pages/main/containers/mainContainer",
    path: "/",
    isProtected: true,
  },
  {
    title: "Admin | Store",
    component: "./pages/accounts/containers/loginContainer",
    path: "/login",
    isProtected: false,
  },
  {
    title: "Dashboard | Store",
    component: "./pages/main/components/dashboard",
    path: "/dashboard",
    isProtected: true,
  },
  {
    title: "Dept Page | Store",
    component: "./pages/main/components/deptOfDay",
    path: "/dept-page",
    isProtected: true,
  },
];
