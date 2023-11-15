<template>
  <div class="container">
   <img style="width: 100px; height: 100px" :src="getImageUrl('image/logo/logo.png')" />
<el-button type="primary">
  <IEpSearch />
  Search</el-button>
  </div>
</template>
<script setup lang="ts">
import { formConfig } from "./data/formConfig";
import { tableAttr, columnHeader } from "./data/tableConfig";
import { tableData } from "./data/tableDate";
import { queryForm } from "@/utils/index";
const state = reactive({
  formConfig: formConfig, // 表单配置项
  formParams: queryForm(formConfig), // 表单参数
  pageConfig: {
    // 分页配置项
    isPagination: true,
    total: 0,
    pageData: {
      page: 1,
      size: 10,
    },
  },
  tableAttr: tableAttr, // table配置项
  columns: columnHeader, // 表头
  tableData: [], // 表格数据
  title: { name: '按钮组件' }
});
const getImageUrl=(url:string)=>{
    console.log(url)
    return new URL(`../../assets/${url}`,import.meta.url).href
}
/*
  ElementPlus按需引入或者使用CDN，因为该包占体积太大
*/ 
nextTick(() => {
  getTableData();
});
function btnClick(){
  console.log(1)
}
// 请求数据
function getTableData() {
  setTimeout(() => {
    state.tableData = tableData;
    state.pageConfig.total = tableData.length;
  }, 1000);
}
// input输入框失焦事件
function blurEvent(item) {
  console.log(`input输入框失焦事件`);
}
// 搜索
function searchBtn(row) {
  console.log("搜索：", state.formParams);
  getTableData();
}
// 添加
function addBtn(row) {
  console.log("添加：", row);
}
// 勾选删除
function deleteData(row) {
  console.log("勾选删除：", row);
}
// 条数变化
function handleSizeChange(row) {
  console.log("条数变化：", row);
}
// 页码变化
function handleCurrentChange(row) {
  console.log("页码变化：", row);
}
// table勾选
function tableSelectionChange(row) {
  console.log("已勾选：", row);
}
// 翻页序号递增
function indexAdd(index) {
  const page = state.pageConfig.pageData.page; // 当前页码
  const pagesize = state.pageConfig.pageData.size; // 每页条数
  return index + 1 + (page - 1) * pagesize;
}
// 查看详情
function viewRow(row) {
  console.log("查看详情：", row);
}
// 编辑
function editRow(row) {
  console.log("编辑：", row);
}
// 单行删除
function deleteRow(row) {
  console.log("单行删除：", row);
}
const vPlaceholderScale: Directive = (el: HTMLLIElement) => {
  el.addEventListener("focus", function () {
    console.log(this.getAttribute("placeholder"));
    this.style.transform = "scale(1.2)";
    this.style.transition = "all 0.5s";
    // JavaScript 设置input placeholder的字体大小
  });
  el.addEventListener("blur", function () {
    this.style.transform = "scale(1)";
    this.style.transition = "all 0.5s";
  });
};
</script>
<style lang="scss" scoped></style>
