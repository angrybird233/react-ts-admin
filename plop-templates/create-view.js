import { notEmpty } from './utils.js'


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
      choices: ["default","list", "form", "detail"],
    }
  ],
  actions: data => {
    const pname = data.pname;
    const ename = pname.split("/").splice(-1)[0];
    data.key = pname.replace(/\//g, "_");
    data.ename = ename;
    if (data.type === 1) {
      data.temp = "default";
    }
    const actions = [
      {
        type: "add",
        path: `src/views/${pname}/${ename}.tsx`,
        templateFile: `plop-templates/view/index.${data.temp}.hbs`,
        data: data
      },
      {
        type: "add",
        path: `src/views/${pname}/config.tsx`,
        templateFile: "plop-templates/view/config.tsx.hbs",
        data: data
      },
    ];
    if(data.type !== 1){
      actions.push({
        type: "add",
        path: `src/views/${pname}/${ename}.module.less`,
        templateFile: "plop-templates/view/index.less.hbs",
        data: data
      })
    }
    return actions;
  }
};
