# 1.所需依赖

项目只需要安装一个依赖即可 antd-theme-generator

# 2.配置文件




```
<link rel="stylesheet/less" type="text/css" href="/color.less" />
<script>
  window.less = {
    async: true,
    env: 'production'
  };
</script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.min.js"></script>
```
在主html文件中插入如下代码
代码讲解，第一行就是引用样式文件，这个color.less就是我们动态修改实时生成的antd样式文件


```
const { generateTheme } = require('antd-theme-generator');

const options = {
  antDir: path.join(__dirname, './node_modules/antd'),
  stylesDir: path.join(__dirname, './src'), // all files with .less extension will be processed
  varFile: path.join(__dirname, './src/styles/variables.less'), // default path is Ant Design default.less file
  themeVariables: ['@primary-color'],
  outputFilePath: path.join(__dirname, './public/color.less') // if provided, file will be created with generated less/styles
  customColorRegexArray: [/^fade\(.*\)$/], // An array of regex codes to match your custom color variable values so that code can identify that it's a valid color. Make sure your regex does not adds false positives.
}

generateTheme(options).then(less => {
  console.log('Theme generated successfully');
})
.catch(error => {
  console.log('Error', error);
})
```
在项目根目录创建color.js，然后修改package.json启动命令

具体api查官方文档即可
`"start": "node color.js && craco  start",`

```
window.less.modifyVars({
  '@primary-color': '#0035ff'
})
```
在需要的地方调用上述方法即可实现动态切换主题
# 雷点
不要在项目里面再次引用antd主题样式，如果需要用到主题色什么的。直接从variables.less里面引用

项目地址：https://github.com/CHU295/react-ant-design-dynamic-theme