import { defineComponent } from "vue";
import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";
// 如果文件类型是tsx或者jsx文件类型，那么就不需要在script标签中声明了，如果文件类型是vue文件，
// 那么想在vue文件中写tsx或者jsx语法那么就需要在script标签中声明tsx或者jsx
// https://zhuanlan.zhihu.com/p/596102026?utm_id=0
export default defineComponent({
  name: "SButton",
		props: {
			title: Object,
		},
  setup(props, context) {
    console.log(props); // props是一个包含组件的属性的响应式对象,如果子组件没有定义props，那么将会被context.attrs接收
    console.log(context.attrs); // 包含组件的props和DOM属性
    console.log(context.slots); // 包含组件的slots的对象
    console.log(context.emit); // 事件注册
    console.log(context.expose); // 控制组件暴露给父组件的内容
    let iconFlag = false;
    return () => {
      if (iconFlag) {
        return (
          <el-button
            type="primary"
            icon={ArrowLeft}
            onClick={() => context.emit("btnClick")}
          >
            ArrowLeft
          </el-button>
        );
      } else {
        return (
          <el-button
            type="primary"
            v-slots={{
              icon: () => <ArrowRight />,
            }}
            onClick={() => context.emit("btnClick")}
          >
            ArrowRight
          </el-button>
        );
      }
    };
  },
});
