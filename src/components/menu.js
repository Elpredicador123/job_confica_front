
export const menuItems = [
    {
        id: 7,
        label: "menuitems.news.text",
        icon: "uil-store",
        subItems: [
            {
                id: 91,
                label: "menuitems.news.list.index",
                link: "/news/index",
                parentId: 7,
                meta: {
                    permissions: ['L_NEWS'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 92,
                label: "menuitems.news.list.create",
                link: "/news/create/",
                parentId: 7,
                meta: {
                    permissions: ['C_NEWS'] // Permisos necesarios para acceder a este elemento del menú
                }
            }
        ],
        meta: {
            permissions: ['NEWS'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 8,
        label: "menuitems.birthday.text",
        icon: "uil-store",
        subItems: [
            {
                id: 93,
                label: "menuitems.birthday.list.index",
                link: "/birthday/index",
                parentId: 8,
                meta: {
                    permissions: ['L_BIRTHDAY'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 94,
                label: "menuitems.birthday.list.calendar",
                link: "/birthday/calendar",
                parentId: 8,
                meta: {
                    permissions: ['C_BIRTHDAY'] // Permisos necesarios para acceder a este elemento del menú
                }
            }
        ],
        meta: {
            permissions: ['BIRTHDAY'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 9,
        label: "menuitems.reservation.text",
        icon: "uil-store",
        subItems: [
            {
                id: 95,
                label: "menuitems.reservation.list.index",
                link: "/reservation/index",
                parentId: 9,
                meta: {
                    permissions: ['L_RESERVATION'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 96,
                label: "menuitems.reservation.list.create",
                link: "/reservation/create",
                parentId: 9,
                meta: {
                    permissions: ['C_RESERVATION'] // Permisos necesarios para acceder a este elemento del menú
                }
            }
        ],
        meta: {
            permissions: ['RESERVATION'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 10,
        label: "menuitems.cuadromando.text",
        icon: "uil-calender",
        link: "/cuadromando",
        meta: {
            permissions: ['CONTROL_PANEL'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 11,
        label: "menuitems.principal.text",
        icon: "uil-calender",
        link: "/principal",
        meta: {
            permissions: ['PRINCIPAL'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 12,
        label: "menuitems.gestion.text",
        icon: "uil-calender",
        link: "/gestion",
        meta: {
            permissions: ['MANAGEMENT'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 13,
        label: "menuitems.provision.text",
        icon: "uil-calender",
        link: "/provision",
        meta: {
            permissions: ['PROVISION'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 14,
        label: "menuitems.mantenimiento.text",
        icon: "uil-calender",
        link: "/mantenimiento",
        meta: {
            permissions: ['MAINTENANCE'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 15,
        label: "menuitems.calidad.text",
        icon: "uil-calender",
        link: "/calidad",
        meta: {
            permissions: ['QUALITY'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 16,
        label: "menuitems.infografias.text",
        icon: "uil-store",
        subItems: [
            {
                id: 99,
                label: "menuitems.infografias.list.index",
                link: "/infografias/index",
                parentId: 16,
                meta: {
                    permissions: ['L_INFOGRAPHIC'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 100,
                label: "menuitems.infografias.list.create",
                link: "/infografias/create",
                parentId: 16,
                meta: {
                    permissions: ['C_INFOGRAPHIC'] // Permisos necesarios para acceder a este elemento del menú
                }
            }
        ],
        meta: {
            permissions: ['INFOGRAPHIC'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 17,
        label: "menuitems.liquidacion.text",
        icon: "uil-store",
        subItems: [
            {
                id: 97,
                label: "menuitems.liquidacion.list.index",
                link: "/liquidacion/index",
                parentId: 17,
                meta: {
                    permissions: ['L_ORDER'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 98,
                label: "menuitems.liquidacion.list.create",
                link: "/liquidacion/create",
                parentId: 17,
                meta: {
                    permissions: ['C_ORDER'] // Permisos necesarios para acceder a este elemento del menú
                }
            }
        ],
        meta: {
            permissions: ['ORDER'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 18,
        label: "menuitems.tecnicos.text",
        icon: "uil-calender",
        link: "/tecnicos",
        meta: {
            permissions: ['TECHNICAL'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
];