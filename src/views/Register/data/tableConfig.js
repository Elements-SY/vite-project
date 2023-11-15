const sex = {
  0: "女",
  1: "男",
};
const healthStatus = {
  0: "不良",
  1: "良好",
};
const maritalStatus = {
  0: "未婚",
  1: "已婚",
};
export const tableAttr = {
  border: true,
  loadingTable: false,
  isDragSort: false, // 拖拽tableData数据一定要加id字段
  maxHeight: 300,
  // defaultSort: { prop: "updateTime", order: "descending" },
  btnCofig: {
    isBtn: true,
    btnGroup: [
      {
        type: "primary", // text、primary、danger
        icon: "el-icon-search", // el-icon-edit 、el-icon-delete、el-icon-plus、el-icon-download、el-icon-upload el-icon--right
        btnName: "搜索",
        size: "mini", // medium / small / mini
        round: false,
        loading: false,
        event: "search",
      },
      {
        type: "primary",
        icon: "el-icon-plus",
        btnName: "添加",
        size: "mini",
        round: false,
        loading: false,
        event: "add",
      },
      {
        type: "danger",
        icon: "el-icon-delete",
        btnName: "删除",
        size: "mini",
        round: false,
        loading: false,
        event: "delete",
      },
    ],
  },
};
// export const columnHeader = (indexAdd, viewRow, editRow, deleteRow) => [
//   {
//     type: "selection",
//     align: "center",
//     prop: "selection",
//     width: "50",
//   },
//   {
//     type: "index",
//     label: "序号",
//     prop: "id",
//     align: "center",
//     width: "50",
//     index: indexAdd,
//   },
//   {
//     label: "性别",
//     prop: "sex",
//     align: "center",
//     minWidth: 80,
//     render: (h, params) => {
//       const { row } = params;
//       return h("div", `${sex[row.sex]}`);
//     },
//   },
//   {
//     label: "姓名",
//     prop: "name",
//     align: "center",
//     minWidth: 120,
//   },
//   {
//     label: "年龄",
//     prop: "age",
//     align: "center",
//     minWidth: 80,
//   },
//   {
//     label: "身高",
//     prop: "height",
//     align: "center",
//     minWidth: 80,
//     render: (h, params) => {
//       const { row } = params;
//       return h("div", `${row.height} 米`);
//     },
//     // sortable: true,
//     // "sort-method": (a, b) => a.createTime - b.createTime,
//   },
//   {
//     label: "健康状况",
//     prop: "health",
//     align: "center",
//     minWidth: 80,
//     render: (h, params) => {
//       const { row } = params;
//       return h("div", `${healthStatus[row.health]}`);
//     },
//   },
//   {
//     label: "学历",
//     prop: "education",
//     align: "center",
//     minWidth: 80,
//   },
//   {
//     label: "工作",
//     prop: "job",
//     align: "center",
//     minWidth: 100,
//   },
//   {
//     label: "婚姻状况",
//     prop: "maritalStatus",
//     align: "center",
//     minWidth: 60,
//     render: (h, params) => {
//       const { row } = params;
//       return h("div", `${maritalStatus[row.maritalStatus]}`);
//     },
//   },
//   {
//     label: "操作",
//     prop: "operate",
//     align: "center",
//     minWidth: 140,
//     fixed: "right",
//     render: (h, params) => {
//       let operateData = [];
//       if (params.row.health == "1") {
//         operateData = [
//           h(
//             "el-button",
//             {
//               props: {
//                 type: "text",
//                 size: "mini",
//                 icon: "el-icon-view",
//               },
//               on: {
//                 click() {
//                   viewRow(params);
//                 },
//               },
//             },
//             "查看"
//           ),
//           h(
//             "el-button",
//             {
//               props: {
//                 type: "text",
//                 size: "mini",
//                 icon: "el-icon-edit",
//               },
//               on: {
//                 click() {
//                   editRow(params);
//                 },
//               },
//             },
//             "修改"
//           ),
//           h(
//             "el-button",
//             {
//               style: {
//                 color: "#ff4949",
//               },
//               props: {
//                 type: "text",
//                 size: "mini",
//                 icon: "el-icon-delete",
//               },
//               on: {
//                 click() {
//                   deleteRow(params);
//                 },
//               },
//             },
//             "删除"
//           ),
//         ];
//       } else {
//         operateData = [
//           h(
//             "el-button",
//             {
//               props: {
//                 type: "text",
//                 size: "mini",
//                 icon: "el-icon-view",
//               },
//               on: {
//                 click() {
//                   viewRow(params);
//                 },
//               },
//             },
//             "查看"
//           ),
//         ];
//       }
//       return h("div", operateData);
//     },
//   },
// ];

export const columnHeader = [
  {
    prop: "name",
    label: "姓名",
    align: "center",
    width: 150,
  },
  {
    prop: "sex",
    label: "性别",
    align: "center",
    width: 150,
  },
  {
    prop: "age",
    label: "年龄",
    align: "center",
    width: 150,
  },
  {
    prop: "job",
    label: "职业",
    align: "center",
    width: 150,
  },
  {
    prop: "education",
    label: "学历",
    align: "center",
    width: 150,
  },
  {
    type: "slot",
    prop: "operation",
    width: "160",
    align: "center",
    label: "操作",
    fixed: "right",
    formatter: (row) => {
      console.log(row);
    },
    buttons: [
      {
        event: "edit",
        type: "primary",
        icon: "View",
        text: "查看",
        size: "small",
        disabled: false,
        // status: this.status
      },
      {
        event: "edit",
        type: "primary",
        icon: "Edit",
        text: "编辑",
        size: "small",
        disabled: false,
      },
      {
        event: "delete",
        type: "danger",
        icon: "Delete",
        text: "删除",
        size: "small",
        disabled: false,
      },
    ],
  },
];
/*
 vite4 vue3 typescript template jsx tsx h 
 
*/ 