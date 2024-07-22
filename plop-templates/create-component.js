import { notEmpty } from './utils.js'


export default {
  description: '公共组件',
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入组件名称(大驼峰),例如：components/xxx",
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
        templateFile: "plop-templates/component/index.hbs",
        data: {
          name: name,
        }
      },
      {
        type: "add",
        path: `src/components/${name}/index.module.less`,
        templateFile: "plop-templates/component/index.less.hbs",
        data: {
          name: name,
        }
      },
      {
        type: "add",
        path: `src/components/${name}/README.md`,
        templateFile: "plop-templates/component/readme.hbs",
      }
    ];
    return actions;
  }
}