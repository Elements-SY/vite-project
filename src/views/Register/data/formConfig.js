export const formConfig = [
  {
    label: "姓名",
    type: "Input",
    prop: "name",
    placeholder: "请输入姓名",
    trigger: "blur",
    inputWidth: "100%",
    rules: { required: true, message: "请输入姓名", trigger: "blur" },
  },
  {
    label: "城市",
    type: "Search",
    prop: "city",
    placeholder: "请输入城市",
    trigger: "blur",
    labelWidth: "55px",
    rules: { required: true, message: "请输入城市", trigger: "blur" },
  },
  {
    label: "开始时间",
    type: "Date",
    prop: "startTime",
    placeholder: "请选择开始时间",
    format: "yyyy-MM-dd",
    inputWidth: "100%",
    // rules: {
    //   required: true,
    //   message: "请选择开始时间",
    //   trigger: ["blur", "change"],
    // },
  },
  {
    label: "结束时间",
    type: "Date",
    prop: "endTime",
    placeholder: "请选择结束时间",
    format: "yyyy-MM-dd",
    inputWidth: "100%",
  },
//   {
//     label: "状态",
//     type: "Select",
//     prop: "status",
//     value: "有效",
//     placeholder: "请选择状态",
//     colWidth: "15%",
//     inputWidth: "100%",
//     labelWidth: "40px",
//     options: {
//       data: [
//         {
//           value: "1",
//           label: "有效",
//         },
//         {
//           value: "0",
//           label: "无效",
//         },
//       ],
//     },
//   },
];
