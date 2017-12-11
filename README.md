# MKUI

[![React](https://img.shields.io/badge/react-^15.6.2-brightgreen.svg?style=flat-square)](https://github.com/facebook/react)
[![npm version](https://img.shields.io/npm/v/redux.svg?style=flat-square)](https://www.npmjs.com/package/redux)
[![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)](http://opensource.org/licenses/MIT)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)

演示地址：(待补充)

## 定位：
-   web页纯组件库，不涉及三方逻辑和太多业务场景代码。

## 组件规范：
为了减少编码过程中可能出现的问题，我们制定了如下规范，希望能减少常见的错误。
-   有状态组件只有 render 方法才能返回 JSX，因为 JSX 中的虚拟 DOM 有一个 _owner 属性，这与它与组件实例进行绑定。如果其他方法里使用了 JSX， _owner 就没有与组件实例进行绑定。
-   render 方法里面应该以 < 开头，不应该存在 if else 分支，视情况返回不同的JSX。相同的组件应该返回相同的顶级元素容器。
```
// 不好的实践
render() {
   if (this.state.a) {
      return <strong>不要</strong>
   } else {
      return <div>这样</div>
   }
}
```
-   ref 应该尽快淘汰字符串形式，因为字符串形式的 ref 会自始至终将字符串放在 refs 对象中，会有泄露的问题。
```
// 不好的实践
<Foo
  ref="myRef"
/>

// 一般的实践
<Foo
  ref={(ref) => { this.myRef = ref; }}
/>
```
-   上面的方法之所以是一般的实践，而不是好的实践，是因为我们在查看组件时，别人很难察觉到你在 JSX 里偷偷为组件添加了一个新属性。组件所有用到的属性，应该都能在 constructor 或 defaultProps 中找到。

-   refs.xxx 中的 DOM 节点，不应该再转存到组件实例上或其他地方中。每次访问 refs.xxx 必须判定其是否为空。

-   不要在 componentWillUpdate/componentDidUpdate/render 中执行 setState, 可能导致死循环。

-   不要在 JSX 中使用 bind 方法绑定组件实例
```
// 不好的实践
class extends React.Component {
  onClickDiv() {
    // do something
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// 好的实践
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do something
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```
-   不要使用 cloneElement，createElement，让 JSX 与 babel 帮你创建它们。

-   不要使用 createClass, mixin，PropTypes（它们已经被移出核心库，被逐渐边缘化，有关属性的描述改成文档注释吧）。


文件夹命名说明:

-   components：组件（方法）为单位以文件夹保存，文件夹名组件首字母大写（如`DataTable`），方法首字母小写（如`layer`）,文件夹内主文件与文件夹同名，多文件以`index.js`导出对象（如`./src/components/Layout`）。
-   routes：页面为单位以文件夹保存，文件夹名首字母小写（特殊除外，如`UIElement`）,文件夹内主文件以`index.js`导出。

### 开发

克隆项目文件:

    git clone git@github.com:PhotoArtLife/mkui.git

进入目录安装依赖:

    npm install(npm i) 或者 yarn install

构建：

```bash
npm run build

将会生成build目录
```


使用：

```bash
import 'mkui/lib/style.css'
import { Button } from 'mkui';

ReactDOM.render(<Button type="success"/>test</Button>, mountNode);

```

## 开发及构建

### 目录结构
```
├── package.json
├── build         # 生成目录
├── dev           # 源文件目录
├── dev/mkui      # 组件库目录
└── lib           # npm 包构建目录
```

### 开发

使用之前先安装相关依赖：
```
npm install webpack -g
npm install

浏览器输入
http://localhost:4001
```
- 开发
  ```
  npm start
  ```
- 构建
  ```
  npm run build -> build静态文件+lib css
  npm run lib -> lib文件 -> npm publish（发到npm新版本）
  ```
