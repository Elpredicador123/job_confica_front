
export const menuItems = [
    {
        id: 1,
        label: "menuitems.principal.text",
        icon: "uil-dashboard",
        link: "/principal",
        meta: {
            permissions: ['PRINCIPAL'] // Permisos necesarios para acceder a este elemento del menú
        }
    },

    {
        id: 15,
        label : "menuitems.soporte.text",
        icon: "bx bx-support",
        subItems: [
            {
                id: 2,
                label: "menuitems.news.text",
                icon: "uil-newspaper",
                subItems: [
                    {
                        id: 91,
                        label: "menuitems.news.list.index",
                        link: "/news/index",
                        parentId: 2,
                        meta: {
                            permissions: ['L_NEWS'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    },
                    {
                        id: 92,
                        label: "menuitems.news.list.create",
                        link: "/news/create",
                        parentId: 2,
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
                id: 4,
                label : "menuitems.reservation.text",
                icon: "uil-calendar-slash",
                subItems: [
                    {
                        id: 95,
                        label: "menuitems.reservation.list.index",
                        link: "/reservation/index",
                        parentId: 4,
                        meta: {
                            permissions: ['L_RESERVATION'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    },
                    {
                        id: 96,
                        label: "menuitems.reservation.list.create",
                        link: "/reservation/create",
                        parentId: 4,
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
                id: 11,
                label: "menuitems.infografias.text",
                icon: "uil-cloud-download",
                subItems: [
                    {
                        id: 99,
                        label: "menuitems.infografias.list.index",
                        link: "/infografias/index",
                        parentId: 11,
                        meta: {
                            permissions: ['L_INFOGRAPHIC'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    },
                    {
                        id: 100,
                        label: "menuitems.infografias.list.create",
                        link: "/infografias/create",
                        parentId: 11,
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
                id: 12,
                label: "menuitems.liquidacion.text",
                icon: "uil-shopping-basket",
                subItems: [
                    {
                        id: 97,
                        label: "menuitems.liquidacion.list.index",
                        link: "/liquidacion/index",
                        parentId: 12,
                        meta: {
                            permissions: ['L_ORDER'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    },
                    {
                        id: 98,
                        label: "menuitems.liquidacion.list.create",
                        link: "/liquidacion/create",
                        parentId: 12,
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
                id: 13,
                label: "menuitems.tecnicos.text",
                icon: "uil-chat-bubble-user",
                subItems: [
                    {
                        id: 30,
                        label: "menuitems.tecnicos.list.index",
                        link: "/tecnicos/index",
                        parentId: 13,
                        meta: {
                            permissions: ['L_TECHNICAL'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    },
                    {
                        id: 31,
                        label: "menuitems.tecnicos.list.create",
                        link: "/tecnicos/create",
                        parentId: 13,
                        meta: {
                            permissions: ['C_TECHNICAL'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    }
                ],
                meta: {
                    permissions: ['TECHNICAL'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 14,
                label: "menuitems.usuarios.text",
                icon: "uil-users-alt",
                subItems: [
                    {
                        id: 32,
                        label: "menuitems.usuarios.list.index",
                        link: "/usuarios/index",
                        parentId: 14,
                        meta: {
                            permissions: ['L_USER'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    },
                    {
                        id: 33,
                        label: "menuitems.usuarios.list.create",
                        link: "/usuarios/create",
                        parentId: 14,
                        meta: {
                            permissions: ['C_USER'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    }
                ],
                meta: {
                    permissions: ['USER'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 3,
                label: "menuitems.birthday.text",
                icon: "uil-calendar-alt",
                subItems: [
                    {
                        id: 93,
                        label: "menuitems.birthday.list.index",
                        link: "/birthday/index",
                        parentId: 3,
                        meta: {
                            permissions: ['L_BIRTHDAY'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    },
                    {
                        id: 94,
                        label: "menuitems.birthday.list.calendar",
                        link: "/birthday/calendar",
                        parentId: 3,
                        meta: {
                            permissions: ['C_BIRTHDAY'] // Permisos necesarios para acceder a este elemento del menú
                        }
                    }
                ],
                meta: {
                    permissions: ['BIRTHDAY'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
        ]
    },
    {
        id: 4,
        label: "menuitems.reservation.text",
        icon: "uil-calendar-slash",
        subItems: [
            {
                id: 95,
                label: "menuitems.reservation.list.index",
                link: "/reservation/index",
                parentId: 4,
                meta: {
                    permissions: ['L_RESERVATION'] // Permisos necesarios para acceder a este elemento del menú
                }
            },
            {
                id: 96,
                label: "menuitems.reservation.list.create",
                link: "/reservation/create",
                parentId: 4,
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
        id: 6,
        label: "menuitems.cuadromando.text",
        icon: "uil-chart-bar",
        link: "/cuadromando",
        meta: {
            permissions: ['CONTROL_PANEL'] // Permisos necesarios para acceder a este elemento del menú
        }
    },

    {
        id: 7,
        label: "menuitems.gestion.text",
        icon: "uil-table",
        link: "/gestion",
        meta: {
            permissions: ['MANAGEMENT'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 8,
        label: "menuitems.provision.text",
        icon: "uil-chart-growth-alt",
        link: "/provision",
        meta: {
            permissions: ['PROVISION'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 9,
        label: "menuitems.mantenimiento.text",
        icon: "uil-chart-pie-alt",
        link: "/mantenimiento",
        meta: {
            permissions: ['MAINTENANCE'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
    {
        id: 10,
        label: "menuitems.calidad.text",
        icon: "uil-chart-pie",
        link: "/calidad",
        meta: {
            permissions: ['QUALITY'] // Permisos necesarios para acceder a este elemento del menú
        }
    },
];