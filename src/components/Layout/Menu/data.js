export const menuList = [
    {
        "path": "/system",
        "component": "Layout",
        "redirect": "/system/user",
        "meta": {
            "title": "系统管理",
            "icon": "system",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "user",
                "component": "system/user/index",
                "name": "user",
                "meta": {
                    "title": "用户管理",
                    "icon": "user",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "role",
                "component": "system/role/index",
                "name": "role",
                "meta": {
                    "title": "角色管理",
                    "icon": "role",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "cmenu",
                "component": "system/menu/index",
                "name": "cmenu",
                "meta": {
                    "title": "菜单管理",
                    "icon": "menu",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "dept",
                "component": "system/dept/index",
                "name": "dept",
                "meta": {
                    "title": "部门管理",
                    "icon": "tree",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "dict",
                "component": "system/dict/index",
                "name": "dict",
                "meta": {
                    "title": "字典管理",
                    "icon": "dict",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "path": "/pms",
        "component": "Layout",
        "redirect": "/pms/goods",
        "name": "/pms",
        "meta": {
            "title": "商品管理",
            "icon": "goods",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "goods",
                "component": "pms/goods/index",
                "name": "goods",
                "meta": {
                    "title": "商品列表",
                    "icon": "goods-list",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "goods-detail",
                "component": "pms/goods/detail",
                "name": "goods-detail",
                "meta": {
                    "title": "商品上架",
                    "icon": "publish",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "category",
                "component": "pms/category/index",
                "name": "category",
                "meta": {
                    "title": "商品分类",
                    "icon": "menu",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "brand",
                "component": "pms/brand/index",
                "name": "brand",
                "meta": {
                    "title": "品牌管理",
                    "icon": "brand",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "path": "/oms",
        "component": "Layout",
        "redirect": "/oms/order",
        "name": "/oms",
        "meta": {
            "title": "订单管理",
            "icon": "shopping",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "order",
                "component": "oms/order/index",
                "name": "order",
                "meta": {
                    "title": "订单列表",
                    "icon": "order",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "path": "/ums",
        "component": "Layout",
        "redirect": "/ums/member",
        "name": "/ums",
        "meta": {
            "title": "会员管理",
            "icon": "user",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "member",
                "component": "ums/member/index",
                "name": "member",
                "meta": {
                    "title": "会员列表",
                    "icon": "peoples",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "path": "/sms",
        "component": "Layout",
        "meta": {
            "title": "营销管理",
            "icon": "number",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "advert",
                "component": "sms/advert/index",
                "name": "advert",
                "meta": {
                    "title": "广告列表",
                    "icon": "advert",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "coupon",
                "component": "sms/coupon/index",
                "name": "coupon",
                "meta": {
                    "title": "优惠券列表",
                    "icon": "menu",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            }
        ]
    },
    {
        "path": "/multi-level",
        "component": "Layout",
        "redirect": "/nested/level1/level2",
        "meta": {
            "title": "多级菜单",
            "icon": "nested",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "level1",
                "component": "demo/multi-level/level1",
                "redirect": "/nested/level1/level2",
                "name": "level1",
                "meta": {
                    "title": "菜单一级",
                    "icon": "",
                    "hidden": false,
                    "alwaysShow": true,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                },
                "children": [
                    {
                        "path": "level2",
                        "component": "demo/multi-level/children/level2",
                        "redirect": "/nested/level1/level2/level3",
                        "name": "level2",
                        "meta": {
                            "title": "菜单二级",
                            "icon": "",
                            "hidden": false,
                            "alwaysShow": true,
                            "roles": [
                                "ADMIN"
                            ],
                            "keepAlive": true
                        },
                        "children": [
                            {
                                "path": "level3-1",
                                "component": "demo/multi-level/children/children/level3-1",
                                "name": "level3-1",
                                "meta": {
                                    "title": "菜单三级-1",
                                    "icon": "",
                                    "hidden": false,
                                    "alwaysShow": false,
                                    "roles": [
                                        "ADMIN"
                                    ],
                                    "keepAlive": true
                                }
                            },
                            {
                                "path": "level3-2",
                                "component": "demo/multi-level/children/children/level3-2",
                                "name": "level3-2",
                                "meta": {
                                    "title": "菜单三级-2",
                                    "icon": "",
                                    "hidden": false,
                                    "alwaysShow": false,
                                    "roles": [
                                        "ADMIN"
                                    ],
                                    "keepAlive": true
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "path": "/external-link",
        "component": "Layout",
        "redirect": "noredirect",
        "name": "/external-link",
        "meta": {
            "title": "外部链接",
            "icon": "link",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "https://juejin.cn/post/7228990409909108793",
                "meta": {
                    "title": "项目文档",
                    "icon": "link",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            }
        ]
    }
]