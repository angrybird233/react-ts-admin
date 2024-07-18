import { notEmpty } from './utils'

export default {
  description: "模块页面",
  prompts: [
    {
      type: "input",
      name: "pname",
      message: "请输入要创建的文件路径，例如：myapp/xxx:",
      validate: notEmpty("name")
    },
    {
      type: "input",
      name: "cname",
      message: "请输入模块中文名称:",
      validate: notEmpty("cname")
    },
    {
      type: "list",
      name: "type",
      message: "请选择页面类型:",
      choices: [
        {
          name: "menu",
          value: 1
        },
        {
          name: "view",
          value: 2
        },
        {
          name: "menu and view",
          value: 3
        }
      ]
    },
    {
      type: "list",
      name: "temp",
      message: "请选择页面模版:",
      choices: ["list", "form", "detail"],
      when: data => {
        return data.type !== 1;
      }
    }
  ],
  actions: data => {
    data.ename = data.pname.split("/").splice(-1)[0];
    data.key = data.pname.replace(/\//g, "_");
    if (data.type === 1) {
      data.temp = "list";
    }

    const pname = "{{ pname }}";
    const ename = "{{ ename }}";
    const temp = "{{ temp }}";
    const actions = [
      {
        type: "add",
        path: `src/views/${pname}/${ename}.vue`,
        templateFile: `create/view/index.${temp}.hbs`,
        data: data
      },
      {
        type: "add",
        path: `src/views/${pname}/${ename}.ts`,
        templateFile: "create/view/index.ts.hbs",
        data: data
      },
      {
        type: "add",
        path: `src/views/${pname}/${ename}.module.less`,
        templateFile: "create/view/index.less.hbs",
        data: data
      }
    ];

    return actions;
  }
};
