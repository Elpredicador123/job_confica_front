import { createWebHistory, createRouter } from "vue-router";
import routes from './routes';
import appConfig from "../app.config.json";

const router = createRouter({
    history: createWebHistory("/minible/v-dark"),
    routes,
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0, left: 0 };
        }
    },
});

router.beforeEach((routeTo, routeFrom, next) => {
    const publicPages = ['/login', '/register', '/forgot-password'];
    const authRequired = !publicPages.includes(routeTo.path);
    const loggedUser = JSON.parse(localStorage.getItem('user-token'));

    if (!authRequired) return next();

    if (authRequired && !loggedUser) {
        return next('/login');
    }

    // Suponiendo que 'user-permissions' se almacena como un array de objetos en localStorage,
    // donde cada objeto tiene al menos una propiedad 'key' que representa el permiso.
    const userPermissions = JSON.parse(localStorage.getItem('user-permissions')) || [];

    if (routeTo.meta.permissions) {
        // Verifica si el usuario tiene todos los permisos requeridos para esta ruta,
        // comparando las 'keys' de los permisos requeridos con las 'keys' de los permisos del usuario.
        const hasPermissions = routeTo.meta.permissions.every(permissionKey =>
            userPermissions.some(userPermission => userPermission.key === permissionKey)
        );

        if (!hasPermissions) {
            return next({ path: '/utility/404' }); // Asegúrate de tener esta ruta definida.
        }
    }

    next();
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
    try {
        for (const route of routeTo.matched) {
            await new Promise((resolve, reject) => {
                if (route.meta && route.meta.beforeResolve) {
                    route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
                        if (args.length) {
                            next(...args);
                            reject(new Error('Redirected'));
                        } else {
                            resolve();
                        }
                    });
                } else {
                    resolve();
                }
            });
        }
    } catch (error) {
        return;
    }
    document.title = routeTo.meta.title + ' | ' + appConfig.title;
    next();
});

export default router;
