### Vue特点和高级功能
	解耦视图和数据
	可复用的组件
	前端路由技术
	状态管理
	虚拟DOM

### 代码做了什么事情
	创建Vue对象的时候，传入了一些options

### Vue实例传入的options
	el:
		类型：string | HTMLElement
		作用：决定之后Vue实例会管理哪一个DOM
	data:
		类型：Object | Function（组件当中data必须是一个函数）
		作用：Vue实例对应的数据对象
	methods：
		类型：{[key:string]:Function}
		作用：定义属于Vue的一些方法，可以在其他地方带哦用，也可以在指令中使用

### 开发中什么时候称之为方法，什么时候称之为函数
	方法：methods（在对象或类中定义的）
	函数：function（在script标签中直接定义的）

### 生命周期
	事物从诞生到消亡的整个过程

### 代码规范
	一般项目：缩进4个空格。 
	大型项目：缩进2个空格

### const的使用
	建议：在开发过程中，优先使用const，只有需要某一个标识符的时候才使用let

### v-bind
	作用：动态绑定属性
	缩写：：
	预期：any(with argument) | Object(without argument)
	参数：attrOrProp(optional)

### v-on
	作用：绑定事件监听器
	缩写：@
	预期：Function | Inline Statement | Object
	参数：event

### v-if/v-else 元素复用问题
	给不想复用的元素加上不同的key
	<input type="text" name="" id="username" value="" placeholder="输入用户名" key="username" />
	<input type="text" name="" id="email" value="" placeholder="输入邮箱" key="email"/>
	
### v-if/v-show 如何选择
	当需要在显示和隐藏之间切换很频繁时，使用v-show
	当只有一次切换时，用过v-if

### v-for添加key
	key的作用主要是为了高效的更新虚拟DOM
	
### 组件的使用分成三个步骤
	创建组件构造器：Vue.extend()创建组件构造器
	注册组件：Vue.component()注册组件
	使用组件：Vue实例的作用范围内使用组件
	
### slot
	组件的插槽是为了让我们封装的组件更加具有扩展性

### 作用域插槽
	父组件替换插槽的标签，但是内容由子组件来提供

### export
	export default 在同一个模块中，不允许同时存在多个
	
## Webpack
### 什么是Webpack
	从本质上讲，webpack是一个现代的JavaScript应用的静态模块打包工具
	npm install webpack@3.6.0 -g
	
	webpack ./src/main.js ./dist/bundle.js
	
### 开发时依赖/运行时依赖
	webpack install webpack@3.6.0 --save-dev
	
### 安装style-loader/css-loader/less-loader依赖
	npm install style-loader --save-dev
	npm install --save-dev css-loader
	npm install --save-dev less-loader less
### 安装图片文件依赖
	npm install url-loader --save-dev
	npm install file-loader --save-dev

### 安装Babel依赖
	npm install --save-dev babel-loader@7 babel-core babel-preset-es2015

### 安装Vue依赖
	npm install vue-loader vue-template-compiler --save-dev

### 安装HtmlWebpackPlugin依赖
	npm install html-webpack-plugin --save-dev

### 安装js压缩依赖
	npm install uglifyjs-webpack-plugin@1.1.1 --save-dev
	
### 搭建本地框架
	npm install webpack-dev-server@2.9.3 --save-dev
	
### 项目初始化
	vue init webpack vuecli2test
	
### dist文件内容
	app.js       当前应用程序开发的所有代码（业务代码）
	vendor.js    提供商第三方（vue、vue-router、axios、bs）
	manifest.js  为了打包的代码做底层支撑

### 参数的传递方式
#### params的类型
	配置路由格式： /router/:id
	传递的方式： 在path后面跟上对应的值
	传递后形成的路径： /router/123, /router/abc
#### query的类型
	配置路由格式： /router/,也就是普通配置
	传递的方式： 对象中使用query的key作为传递方式
	传递后形成的路径： /router?id=123, /router?id=abc