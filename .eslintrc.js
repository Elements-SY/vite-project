// ESlint 检查配置
// eslint中文文档：https://eslint.nodejs.cn/docs/latest/use/command-line-interface
// https://eslint.nodejs.cn/docs/latest/rules/
module.exports = {
  root: true,
  extends: ["plugin:vue/recommended", "eslint:recommended",".eslintrc-auto-import.json"],
  // https://github.com/vuejs/eslint-config-vue
  rules: {
    "prettier/prettier": [ // 解决 eslint 和 prettier 冲突
    "warn",
    {
      singleQuote: true,
    }
  ],
    // double || single 允许模板文字反引号
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    eqeqeq: ["error", "smart"], // 要求使用 === 和 !==
    // https://eslint.nodejs.cn/docs/latest/rules/semi
    semi: ["error", "always"],
    "no-dupe-args": "error", // 禁止 function 定义中的重复参数
    "no-dupe-else-if": "error", // 禁止 if-else-if 链中的重复条件
    "no-dupe-class-members": "error", // 禁止重复的类成员
    "no-duplicate-case": "error", // 不允许重复的案例标签
    "no-duplicate-imports": "error", // 禁止重复模块导入
    "no-empty-pattern": "error", // 不允许空解构模式
    "no-irregular-whitespace": "error", // 禁止不规则空格
    "no-self-assign": "error", // 禁止双方完全相同的分配
    "no-unused-private-class-members": "error", // 禁止未使用的私有类成员
    "no-unused-vars": "error", // 禁止未使用的变量
    "max-depth": ["error", 4], // 强制执行块可以嵌套的最大深度
    "no-empty": "error", // 不允许空块语句
    "no-empty-function": "error", // 不允许空函数
    "no-eq-null": "error", // 禁止在没有类型检查运算符的情况下进行 null 比较
    "no-redeclare": "error", // 不允许变量重新声明
    "no-unused-expressions": "error", // 禁止未使用的表达式
    "no-unused-labels": "error", // 禁止未使用的标签
  },
};
