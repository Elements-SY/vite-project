export const menuList = [
 {
  path: '/map',
  component: 'Layout',
  name: 'map',
  redirect: '/map/baidu',
  meta: {
   title: '地图',
   icon: 'map',
   hidden: false,
   alwaysShow: true,
   roles: ['ADMIN'],
   keepAlive: true,
  },
  children: [
   {
    path: 'map-baidu',
    component: 'map/baidu/index',
    name: 'map-baidu',
    meta: {
     title: '百度地图',
     icon: 'baidu',
     hidden: false,
     alwaysShow: false,
     roles: ['ADMIN'],
     keepAlive: true,
    },
   },
   {
    path: 'map-gaode',
    component: 'map/Amap/index',
    name: 'map-gaode',
    meta: {
     title: '高德地图',
     icon: 'amap',
     hidden: false,
     alwaysShow: false,
     roles: ['ADMIN'],
     keepAlive: true,
    },
   },
   {
    path: 'tencent-map',
    component: 'map/Tencent/index',
    name: 'tencent-map',
    meta: {
     title: '腾讯地图',
     icon: 'tencent',
     hidden: false,
     alwaysShow: false,
     roles: ['ADMIN'],
     keepAlive: true,
    },
   },
  ],
 },
 {
  path: '/ai',
  component: 'Layout',
  name: 'ai',
  meta: {
   title: 'AI',
   icon: 'ai',
   hidden: false,
   alwaysShow: true,
   roles: ['ADMIN'],
   keepAlive: true,
  },
  children: [
   {
    path: 'prompt',
    component: 'AI/prompt/index',
    name: 'prompt',
    meta: {
     title: '提示词',
     icon: 'prompt',
     hidden: false,
     alwaysShow: false,
     roles: ['ADMIN'],
     keepAlive: true,
    },
   },
   {
    path: 'ocr',
    component: 'AI/ocr/text/index',
    name: 'ocr',
    meta: {
     title: 'OCR识别',
     icon: 'ocr',
     hidden: false,
     alwaysShow: true,
     roles: ['ADMIN'],
     keepAlive: true,
    },
    children: [
     {
      path: 'text',
      component: 'AI/ocr/text/index',
      name: 'text',
      meta: {
       title: 'OCR文字识别',
       icon: 'text',
       hidden: false,
       alwaysShow: false,
       roles: ['ADMIN'],
       keepAlive: true,
      },
      children: [
       {
        path: 'text-baidu',
        component: 'AI/ocr/text/baidu/index',
        name: 'text-baidu',
        meta: {
         title: '百度OCR文字识别',
         icon: 'baidu',
         hidden: false,
         alwaysShow: false,
         roles: ['ADMIN'],
         keepAlive: true,
        },
       },
       {
        path: 'text-Aliyun',
        component: 'AI/ocr/text/Aliyun/index',
        name: 'text-Aliyun',
        meta: {
         title: '阿里云OCR文字识别',
         icon: 'aliyun',
         hidden: false,
         alwaysShow: false,
         roles: ['ADMIN'],
         keepAlive: true,
        },
       },
       {
        path: 'text-tencent',
        component: 'AI/ocr/text/Tencent/index',
        name: 'text-tencent',
        meta: {
         title: '腾讯OCR文字识别',
         icon: 'tencent',
         hidden: false,
         alwaysShow: false,
         roles: ['ADMIN'],
         keepAlive: true,
        },
       },
      ],
     },
     {
      path: 'pic',
      component: 'AI/ocr/pic/index',
      name: 'pic',
      meta: {
       title: 'OCR图片识别',
       icon: 'pic',
       hidden: false,
       alwaysShow: false,
       roles: ['ADMIN'],
       keepAlive: true,
      },
      children: [
       {
        path: 'pic-baidu',
        component: 'AI/ocr/pic/baidu/index',
        name: 'pic-baidu',
        meta: {
         title: '百度OCR图片识别',
         icon: 'baidu',
         hidden: false,
         alwaysShow: false,
         roles: ['ADMIN'],
         keepAlive: true,
        },
       },
       {
        path: 'pic-Aliyun',
        component: 'AI/ocr/pic/Aliyun/index',
        name: 'pic-Aliyun',
        meta: {
         title: '阿里云OCR图片识别',
         icon: 'aliyun',
         hidden: false,
         alwaysShow: false,
         roles: ['ADMIN'],
         keepAlive: true,
        },
       },
       {
        path: 'pic-tencent',
        component: 'AI/ocr/pic/Tencent/index',
        name: 'pic-tencent',
        meta: {
         title: '腾讯OCR图片识别',
         icon: 'tencent',
         hidden: false,
         alwaysShow: false,
         roles: ['ADMIN'],
         keepAlive: true,
        },
       },
      ],
     },
    ],
   },
  ],
 },
 {
  path: '/net',
  component: 'Layout',
  name: 'net',
  meta: {
   title: 'Net',
   icon: 'net',
   hidden: false,
   alwaysShow: true,
   roles: ['ADMIN'],
   keepAlive: true,
  },
  children: [
   {
    path: 'socket',
    component: 'net/socket/index',
    name: 'socket',
    meta: {
     title: 'Socket',
     icon: 'socket',
     hidden: false,
     alwaysShow: true,
     roles: ['ADMIN'],
     keepAlive: true,
    },
    children: [
     {
      path: 'websocket',
      component: 'net/socket/websocket/index',
      name: 'websocket',
      meta: {
       title: 'Websocket',
       icon: 'websocket',
       hidden: false,
       alwaysShow: false,
       roles: ['ADMIN'],
       keepAlive: true,
      },
     },
    ],
   },
  ],
 },
 {
  path: '/track',
  component: 'Layout',
  name: 'track',
  meta: {
   title: '埋点',
   icon: 'track',
   hidden: false,
   alwaysShow: true,
   roles: ['ADMIN'],
   keepAlive: true,
  },
  children: [
   {
    path: 'track-plugin',
    component: 'track/plugin/index',
    name: 'track-plugin',
    meta: {
     title: '埋点插件',
     icon: 'plugin',
     hidden: false,
     alwaysShow: false,
     roles: ['ADMIN'],
     keepAlive: true,
    },
   },
   {
    path: 'track-utils',
    component: 'track/utils/index',
    name: 'track-utils',
    meta: {
     title: '埋点工具',
     icon: 'utils',
     hidden: false,
     alwaysShow: false,
     roles: ['ADMIN'],
     keepAlive: true,
    },
   },
  ],
 },
 {
  path: '/charts',
  component: 'Layout',
  name: 'charts',
  meta: {
   title: '图表',
   icon: 'charts',
   hidden: false,
   alwaysShow: true,
   roles: ['ADMIN'],
   keepAlive: true,
  },
  children: [
   {
    path: 'echarts',
    component: 'charts/echarts/index',
    name: 'echarts',
    meta: {
     title: 'Echarts',
     icon: 'echarts',
     hidden: false,
     alwaysShow: false,
     roles: ['ADMIN'],
     keepAlive: true,
    },
   },
  ],
 },
 {
  path: '/about',
  component: '/about/index',
  name: 'about',
  meta: {
   title: '关于',
   icon: 'about',
   hidden: false,
   alwaysShow: false,
   roles: ['ADMIN'],
   keepAlive: true,
  },
 },
];
