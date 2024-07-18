import { notEmpty } from "./utils";

export default {
  description: '公共组件',
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入组件名称(英文,大驼峰)",
      validate: notEmpty("name")
    },
    {
      type: "input",
      name: "path",
      message: "Please enter the directory path",
      validate: notEmpty("name")
    },
  ],
  actions: () => {
    const name = "{{name}}";
    const actions = [
      {
        type: "add",
        path: `src/components/${name}/index.tsx`,
        templateFile: "create/component/index.hbs",
        data: {
          name: name,
        }
      },
      {
        type: "add",
        path: `src/components/${name}/index.${name}.less`,
        templateFile: "create/component/index.less.hbs",
        data: {
          name: name,
        }
      },
      {
        type: "add",
        path: `src/components/${name}/README.md`,
        templateFile: "create/component/readme.hbs",
      }
    ];
    return actions;
  }
}