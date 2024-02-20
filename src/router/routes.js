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
    path: "/register",
    name: "register",
    component: () => import("../views/pages/account/register"),
    meta: {
      title: "Register",
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
        if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
          store.dispatch("auth/logOut");
        } else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
          store.dispatch("authfack/logout");
        }
        const authRequiredOnPreviousRoute = routeFrom.matched.some((route) =>
          route.push("/login")
        );
        // Navigate back to previous page, or home as a fallback
        next(
          authRequiredOnPreviousRoute
            ? {
                name: "home"
              }
            : {
                ...routeFrom
              }
        );
      }
    }
  },
  {
    path: "/",
    name: "home",
    meta: { title: "Dashboard", authRequired: true },
    component: () => import("../views/pages/dashboard/index")
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: true },
    component: () => import("../views/pages/calendar/index")
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: true },
    component: () => import("../views/pages/chat/index")
  },
  {
    path: "/principal",
    name: "Principal",
    meta: { title: "Principal", authRequired: true },
    component: () => import("../views/pages/principal/index")
  },
  {
    path: "/cuadromando",
    name: "Cuadro de Mando",
    meta: { title: "Cuadro de Mando", authRequired: true },
    component: () => import("../views/pages/CuadroMando/index")
  },
  {
    path: "/gestion",
    name: "Gestión",
    meta: { title: "Gestión", authRequired: true },
    component: () => import("../views/pages/Gestion/index")
  },
  {
    path: "/news/index",
    name: "Listado",
    meta: { title: "Listado", authRequired: true },
    component: () => import("../views/pages/news/index")
  },
  {
    path: "/news/create",
    name: "Noticias",
    meta: { title: "Noticias", authRequired: true },
    component: () => import("../views/pages/news/create")
  },
  {
    path: "/news/edit/:id",
    name: "Noticias Editar",
    props: true,
    meta: { title: "Noticias Editar", authRequired: true },
    component: () => import("../views/pages/news/edit")
  },
  {
    path: "/birthday/index",
    name: "Listado Cumpleaños",
    meta: { title: "Listado Cumpleaños", authRequired: true },
    component: () => import("../views/pages/birthday/index")
  },
  {
    path: "/birthday/calendar",
    name: "Cumpleaños",
    meta: { title: "Cumpleaños", authRequired: true },
    component: () => import("../views/pages/birthday/calendar")
  },
  {
    path: "/reservation/index",
    name: "Listado Reservas",
    meta: { title: "Listado Reservas", authRequired: true },
    component: () => import("../views/pages/reservation/index")
  },
  {
    path: "/reservation/create",
    name: "Reservaciones",
    meta: { title: "Reservaciones", authRequired: true },
    component: () => import("../views/pages/reservation/create")
  },
  {
    path: "/ecommerce/products",
    name: "Products",
    meta: { title: "Products", authRequired: true },
    component: () => import("../views/pages/ecommerce/products")
  },
  {
    path: "/ecommerce/product-detail/:id",
    name: "Product Detail",
    meta: { title: "Products Details", authRequired: true },
    component: () => import("../views/pages/ecommerce/product-detail")
  },
  {
    path: "/ecommerce/orders",
    name: "Orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/pages/ecommerce/orders")
  },
  {
    path: "/ecommerce/customers",
    name: "Customers",
    meta: { title: "Customers", authRequired: true },
    component: () => import("../views/pages/ecommerce/customers")
  },
  {
    path: "/ecommerce/cart",
    name: "Cart",
    meta: { title: "Cart", authRequired: true },
    component: () => import("../views/pages/ecommerce/cart")
  },
  {
    path: "/ecommerce/checkout",
    name: "Checkout",
    meta: { title: "Checkout", authRequired: true },
    component: () => import("../views/pages/ecommerce/checkout")
  },
  {
    path: "/ecommerce/shops",
    name: "Shops",
    meta: { title: "Shops", authRequired: true },
    component: () => import("../views/pages/ecommerce/shops")
  },
  {
    path: "/ecommerce/add-product",
    name: "Add Product",
    meta: { title: "Add Product", authRequired: true },
    component: () => import("../views/pages/ecommerce/add-product")
  },
  {
    path: "/email/inbox",
    name: "Inbox",
    meta: { title: "Inbox", authRequired: true },
    component: () => import("../views/pages/email/inbox")
  },
  {
    path: "/email/reademail/:id",
    name: "Read Email",
    meta: { title: "Read Email", authRequired: true },
    component: () => import("../views/pages/email/reademail")
  },
  {
    path: "/invoices/detail",
    name: "Invoice Detail",
    meta: { title: "Invoice Detail", authRequired: true },
    component: () => import("../views/pages/invoices/detail")
  },
  {
    path: "/invoices/list",
    name: "Invoice List",
    meta: { title: "Invoice List", authRequired: true },
    component: () => import("../views/pages/invoices/list")
  },
  {
    path: "/contacts/grid",
    name: "User Grid",
    meta: { title: "User Grid", authRequired: true },
    component: () => import("../views/pages/contacts/grid")
  },
  {
    path: "/contacts/list",
    name: "User List",
    meta: { title: "USer List", authRequired: true },
    component: () => import("../views/pages/contacts/list")
  },
  {
    path: "/contacts/profile",
    name: "Profile",
    meta: { title: "Profile", authRequired: true },
    component: () => import("../views/pages/contacts/profile")
  },
  {
    path: "/utility/starter",
    name: "Starter-page",
    meta: { title: "Starter page", authRequired: true },
    component: () => import("../views/pages/utility/starter")
  },
  {
    path: "/utility/maintenance",
    name: "maintenance",
    meta: { title: "Maintenance", authRequired: true },
    component: () => import("../views/pages/utility/maintenance")
  },
  {
    path: "/utility/comingsoon",
    name: "comingsoon",
    meta: { title: "Comingsoon", authRequired: true },
    component: () => import("../views/pages/utility/comingsoon")
  },
  {
    path: "/utility/timeline",
    name: "timeline",
    meta: { title: "Timeline", authRequired: true },
    component: () => import("../views/pages/utility/timeline")
  },
  {
    path: "/utility/faqs",
    name: "faqs",
    meta: { title: "FAQs", authRequired: true },
    component: () => import("../views/pages/utility/faqs")
  },
  {
    path: "/utility/pricing",
    name: "pricing",
    meta: { title: "Pricing", authRequired: true },
    component: () => import("../views/pages/utility/pricing")
  },
  {
    path: "/utility/404",
    name: "error-404",
    meta: { title: "Error 404", authRequired: true },
    component: () => import("../views/pages/utility/404")
  },
  {
    path: "/utility/500",
    name: "error-500",
    meta: { title: "Error 500", authRequired: true },
    component: () => import("../views/pages/utility/500")
  },
  {
    path: "/form/elements",
    name: "elements",
    meta: { title: "Elements", authRequired: true },
    component: () => import("../views/pages/form/elements")
  },
  {
    path: "/form/validation",
    name: "validation",
    meta: { title: "Validation", authRequired: true },
    component: () => import("../views/pages/form/validation")
  },
  {
    path: "/form/advanced",
    name: "form-advanced",
    meta: { title: "Form Advanced", authRequired: true },
    component: () => import("../views/pages/form/advanced")
  },
  {
    path: "/form/editor",
    name: "editor",
    meta: { title: "Editors", authRequired: true },
    component: () => import("../views/pages/form/editor")
  },
  {
    path: "/form/upload",
    name: "upload",
    meta: { title: "File Upload", authRequired: true },
    component: () => import("../views/pages/form/upload")
  },
  {
    path: "/form/repeater",
    name: "repeater",
    meta: { title: "Repeater", authRequired: true },
    component: () => import("../views/pages/form/repeater")
  },
  {
    path: "/form/wizard",
    name: "wizard",
    meta: { title: "Wizard", authRequired: true },
    component: () => import("../views/pages/form/wizard")
  },
  {
    path: "/form/mask",
    name: "mask",
    meta: { title: "Mask", authRequired: true },
    component: () => import("../views/pages/form/mask")
  },
  {
    path: "/tables/basic",
    name: "basic-table",
    meta: { title: "Basic Table", authRequired: true },
    component: () => import("../views/pages/tables/basic")
  },
  {
    path: "/tables/advanced",
    name: "advanced",
    meta: { title: "Advanced Table", authRequired: true },
    component: () => import("../views/pages/tables/advanced")
  },
  {
    path: "/charts/apex",
    name: "apex",
    meta: { title: "Apex", authRequired: true },
    component: () => import("../views/pages/charts/apex/index")
  },
  {
    path: "/charts/chartist",
    name: "chartist",
    meta: { title: "Chartist", authRequired: true },
    component: () => import("../views/pages/charts/chartist/index")
  },
  {
    path: "/charts/chartjs",
    name: "chartjs",
    meta: { title: "Chartjs", authRequired: true },
    component: () => import("../views/pages/charts/chartjs/index")
  },
  {
    path: "/charts/echart",
    name: "echart",
    meta: { title: "EChart", authRequired: true },
    component: () => import("../views/pages/charts/echart/index")
  },
  {
    path: "/icons/unicons",
    name: "unicons",
    meta: { title: "Unicons", authRequired: true },
    component: () => import("../views/pages/icons/unicons")
  },
  {
    path: "/icons/boxicons",
    name: "boxicons",
    meta: { title: "Boxicons", authRequired: true },
    component: () => import("../views/pages/icons/boxicons")
  },
  {
    path: "/icons/materialdesign",
    name: "materialdesign",
    meta: { title: "Material Design", authRequired: true },
    component: () => import("../views/pages/icons/materialdesign")
  },
  {
    path: "/icons/dripicons",
    name: "dripicons",
    meta: { title: "Dripicons", authRequired: true },
    component: () => import("../views/pages/icons/dripicons")
  },
  {
    path: "/icons/fontawesome",
    name: "fontawesome",
    meta: { title: "Font Awesome", authRequired: true },
    component: () => import("../views/pages/icons/fontawesome")
  },
  {
    path: "/maps/google",
    name: "google",
    meta: { title: "Google Maps", authRequired: true },
    component: () => import("../views/pages/maps/google")
  },
  {
    path: "/maps/amchart",
    name: "amchart",
    meta: { title: "Amchart Maps", authRequired: true },
    component: () => import("../views/pages/maps/amchart")
  },
  {
    path: "/ui/alerts",
    name: "alerts",
    meta: { title: "Alerts", authRequired: true },
    component: () => import("../views/pages/ui/alerts")
  },
  {
    path: "/ui/buttons",
    name: "buttons",
    meta: { title: "Buttons", authRequired: true },
    component: () => import("../views/pages/ui/buttons")
  },
  {
    path: "/ui/cards",
    name: "cards",
    meta: { title: "Cards", authRequired: true },
    component: () => import("../views/pages/ui/cards")
  },
  {
    path: "/ui/carousel",
    name: "carousel",
    meta: { title: "Carousel", authRequired: true },
    component: () => import("../views/pages/ui/carousel")
  },
  {
    path: "/ui/dropdown",
    name: "dropdown",
    meta: { title: "Dropdown", authRequired: true },
    component: () => import("../views/pages/ui/dropdown")
  },
  {
    path: "/ui/grid",
    name: "grid",
    meta: { title: "Grid", authRequired: true },
    component: () => import("../views/pages/ui/grid")
  },
  {
    path: "/ui/images",
    name: "images",
    meta: { title: "Images", authRequired: true },
    component: () => import("../views/pages/ui/images")
  },
  {
    path: "/ui/lightbox",
    name: "lightbox",
    meta: { title: "Lightbox", authRequired: true },
    component: () => import("../views/pages/ui/lightbox")
  },
  {
    path: "/ui/modals",
    name: "modals",
    meta: { title: "Modals", authRequired: true },
    component: () => import("../views/pages/ui/modals")
  },
  {
    path: "/ui/rangeslider",
    name: "rangeslider",
    meta: { title: "Range Slider", authRequired: true },
    component: () => import("../views/pages/ui/rangeslider")
  },
  {
    path: "/ui/progressbar",
    name: "progressbar",
    meta: { title: "Progress Bars", authRequired: true },
    component: () => import("../views/pages/ui/progressbar")
  },
  {
    path: "/ui/placeholder",
    name: "placeholder",
    meta: { title: "Placeholder", authRequired: true },
    component: () => import("../views/pages/ui/placeholder")
  },
  {
    path: "/ui/sweet-alert",
    name: "sweet-alert",
    meta: { title: "Sweet-Alert", authRequired: true },
    component: () => import("../views/pages/ui/sweet-alert")
  },

  {
    path: "/ui/tabs-accordions",
    name: "tabs-accordions",
    meta: { title: "Tabs & Accordions", authRequired: true },
    component: () => import("../views/pages/ui/tabs-accordions")
  },
  {
    path: "/ui/typography",
    name: "typography",
    meta: { title: "Typography", authRequired: true },
    component: () => import("../views/pages/ui/typography")
  },

  {
    path: "/ui/video",
    name: "video",
    meta: { title: "Video", authRequired: true },
    component: () => import("../views/pages/ui/video")
  },
  {
    path: "/ui/general",
    name: "general",
    meta: { title: "General", authRequired: true },
    component: () => import("../views/pages/ui/general")
  },
  {
    path: "/ui/colors",
    name: "colors",
    meta: { title: "Colors", authRequired: true },
    component: () => import("../views/pages/ui/colors")
  },
  {
    path: "/ui/rating",
    name: "rating",
    meta: { title: "Rating", authRequired: true },
    component: () => import("../views/pages/ui/rating")
  },
  {
    path: "/auth/login-1",
    name: "login-1",
    meta: { title: "Login", authRequired: true },
    component: () => import("../views/pages/auth/login-1")
  },
  {
    path: "/auth/register-1",
    name: "register-1",
    meta: { title: "Register", authRequired: true },
    component: () => import("../views/pages/auth/register-1")
  },
  {
    path: "/auth/lock-screen",
    name: "lock-screen",
    meta: { title: "Lock Screen", authRequired: true },
    component: () => import("../views/pages/auth/lock-screen")
  },
  {
    path: "/auth/recoverpwd",
    name: "recoverpwd",
    meta: { title: "Recover Password", authRequired: true },
    component: () => import("../views/pages/auth/recoverpwd")
  }
];
