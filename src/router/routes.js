import store from "@/state/store";

export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/pages/account/login"),
    meta: {
      title: "Log in",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (localStorage.getItem("user")) {
          // Si existe la clave "user" en el localStorage, redirige a la página principal
          next({ name: "Inicio" });
        } else {
          // Si no existe la clave "user" en el localStorage, continúa con la página de inicio de sesión
          next();
        }
      }
    }
  },
  {
    path: "/forgot-password",
    name: "Forgot-password",
    component: () => import("../views/pages/account/forgot-password"),
    meta: {
      title: "Forgot password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({
            name: "home"
          });
        } else {
          // Continue to the login page
          next();
        }
      }
    }
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute
            ? {
                name: "Principal"
              }
            : {
                ...routeFrom
              }
        );
      }
    }
  },
  {
    path: "",
    name: "Principal",
    meta: { title: "Principal", authRequired: true},
    component: () => import("../views/pages/principal/index")
  },
  {
    path: "/principal",
    name: "Inicio",
    meta: { title: "Principal", authRequired: true},
    component: () => import("../views/pages/principal/index")
  },
  {
    path: "/cuadromando",
    name: "Cuadro de Mando",
    meta: { title: "Cuadro de Mando", authRequired: true, permissions: ['CONTROL_PANEL']},
    component: () => import("../views/pages/CuadroMando/index")
  },
  {
    path: "/gestion",
    name: "Gestión",
    meta: { title: "Gestión", authRequired: true , permissions: ['MANAGEMENT']},
    component: () => import("../views/pages/Gestion/index")
  },
  {
    path: "/provision",
    name: "Provisión",
    meta: { title: "Provisión", authRequired: true , permissions: ['PROVISION']},
    component: () => import("../views/pages/Provision/index")
  },
  {
    path: "/mantenimiento",
    name: "Mantenimiento",
    meta: { title: "Mantenimiento", authRequired: true , permissions: ['MAINTENANCE']},
    component: () => import("../views/pages/Mantenimiento/index")
  },
  {
    path: "/infografias/index",
    name: "Listado de infografias",
    meta: { title: "Listado de infografias", authRequired: true, permissions: ['INFOGRAPHIC'] },
    component: () => import("../views/pages/infografias/index")
  },
  {
    path: "/infografias/create",
    name: "Infografias",
    meta: { title: "Infografias", authRequired: true, permissions: ['C_INFOGRAPHIC'] },
    component: () => import("../views/pages/infografias/create")
  },
  {
    path: "/liquidacion/index",
    name: "Liquidaciones",
    meta: { title: "Liquidaciones", authRequired: true, permissions: ['ORDER'] },
    component: () => import("../views/pages/liquidacion/index")
  },
  {
    path: "/liquidacion/create",
    name: "Liquidacion",
    meta: { title: "Liquidacion", authRequired: true, permissions: ['C_ORDER'] },
    component: () => import("../views/pages/liquidacion/create")
  },
  {
    path: "/tecnicos/index",
    name: "Listado de técnicos",
    meta: { title: "Listado de técnicos", authRequired: true , permissions: ['TECHNICAL']},
    component: () => import("../views/pages/tecnicos/index")
  },
  {
    path: "/tecnicos/create",
    name: "Crear Técnicos",
    meta: { title: "Crear Técnicos", authRequired: true , permissions: ['C_TECHNICAL']},
    component: () => import("../views/pages/tecnicos/create")
  },
  {
    path: "/calidad",
    name: "Calidad",
    meta: { title: "Calidad", authRequired: true, permissions: ['QUALITY'] },
    component: () => import("../views/pages/Calidad/index")
  },
  {
    path: "/news/index",
    name: "Listado",
    meta: { title: "Listado", authRequired: true, permissions: ['NEWS'] },
    component: () => import("../views/pages/news/index")
  },
  {
    path: "/news/create",
    name: "Noticias",
    meta: { title: "Noticias", authRequired: true , permissions: ['C_NEWS']},
    component: () => import("../views/pages/news/create")
  },
  {
    path: "/birthday/index",
    name: "Listado Cumpleaños",
    meta: { title: "Listado Cumpleaños", authRequired: true, permissions: ['BIRTHDAY'] },
    component: () => import("../views/pages/birthday/index")
  },
  {
    path: "/birthday/calendar",
    name: "Cumpleaños",
    meta: { title: "Cumpleaños", authRequired: true , permissions: ['C_BIRTHDAY']},
    component: () => import("../views/pages/birthday/calendar")
  },
  {
    path: "/reservation/index",
    name: "Listado Reservas",
    meta: { title: "Listado Reservas", authRequired: true, permissions: ['RESERVATION'] },
    component: () => import("../views/pages/reservation/index")
  },
  {
    path: "/reservation/create",
    name: "Reservaciones",
    meta: { title: "Reservaciones", authRequired: true, permissions: ['C_RESERVATION'] },
    component: () => import("../views/pages/reservation/create")
  },
  {
    path: "/usuarios/index",
    name: "Listado Usuarios",
    meta: { title: "Listado Usuarios", authRequired: true, permissions: ['USER'] },
    component: () => import("../views/pages/usuarios/index")
  },
  {
    path: "/usuarios/create",
    name: "Registrar usuario",
    meta: { title: "Registrar usuario", authRequired: true,permissions: ['C_USER'] },
    component: () => import("../views/pages/usuarios/create")
  },
];
