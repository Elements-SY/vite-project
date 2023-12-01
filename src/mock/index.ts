export const menuList = [
    {
        "path": "/map",
        "component": "Layout",
        "redirect": "/map/baidu",
        "meta": {
            "title": "地图",
            "icon": "map",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "baidu",
                "component": "map/baidu/index",
                "name": "baidu",
                "meta": {
                    "title": "百度地图",
                    "icon": "baidu",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "Amap",
                "component": "map/Amap/index",
                "name": "Amap",
                "meta": {
                    "title": "高德地图",
                    "icon": "Amap",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
            {
                "path": "Tencent",
                "component": "map/Tencent/index",
                "name": "Tencent",
                "meta": {
                    "title": "腾讯地图",
                    "icon": "Tencent",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                }
            },
        ]
    },
    {
        "path": "/ocr",
        "component": "Layout",
        "redirect": "/ocr/text/_baidu",
        "name": "ocr",
        "meta": {
            "title": "OCR识别",
            "icon": "ocr",
            "hidden": false,
            "alwaysShow": true,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        },
        "children": [
            {
                "path": "text",
                "component": "ocr/text",
                "name": "text",
                "meta": {
                    "title": "OCR文字识别",
                    "icon": "text",
                    "hidden": false,
                    "alwaysShow": false,
                    "roles": [
                        "ADMIN"
                    ],
                    "keepAlive": true
                },
                "children": [
                    {
                        "path": "_baidu",
                        "component": "ocr/text/baidu",
                        "name": "_baidu",
                        "meta": {
                            "title": "百度OCR文字识别",
                            "icon": "baidu",
                            "hidden": false,
                            "alwaysShow": false,
                            "roles": [
                                "ADMIN"
                            ],
                            "keepAlive": true
                        }
                    },
                    {
                        "path": "ocr/text/Aliyun",
                        "component": "ocr/text/Aliyun",
                        "name": "Aliyun",
                        "meta": {
                            "title": "阿里云OCR文字识别",
                            "icon": "Aliyun",
                            "hidden": false,
                            "alwaysShow": false,
                            "roles": [
                                "ADMIN"
                            ],
                            "keepAlive": true
                        }
                    },
                    {
                        "path": "ocr/text/Tencent",
                        "component": "ocr/text/Tencent",
                        "name": "Tencent",
                        "meta": {
                            "title": "腾讯OCR文字识别",
                            "icon": "Tencent",
                            "hidden": false,
                            "alwaysShow": false,
                            "roles": [
                                "ADMIN"
                            ],
                            "keepAlive": true
                        }
                    },
                ]
            },
        ]
    },
    {
        "path": "/track",
        "component": "track/index",
        "name": "track",
        "meta": {
            "title": "埋点",
            "icon": "track",
            "hidden": false,
            "alwaysShow": false,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        }
    },
    {
        "path": "/echarts",
        "component": "Echarts/index",
        "name": "echarts",
        "meta": {
            "title": "图表",
            "icon": "echarts",
            "hidden": false,
            "alwaysShow": false,
            "roles": [
                "ADMIN"
            ],
            "keepAlive": true
        }
    },
]