import { createApp } from 'vue';
// global css
import 'virtual:uno.css';
import '@/assets/styles/index.scss';
import 'element-plus/theme-chalk/dark/css-vars.css';

// App、router、store
import App from './App.vue';
import store from './store';
import router from './router';

// 自定义指令
import directive from './directive';

// 注册插件
import plugins from './plugins/index'; // plugins

// svg图标
import 'virtual:svg-icons-register';
import ElementIcons from '@/plugins/svgicon';

// permission control
import './permission';

// 动态设置页面标题和加载文本
const updatePageTexts = () => {
  const titleElement = document.getElementById('app-title');
  const loadingElement = document.getElementById('loading-text');
};

// 初始化时设置文本
updatePageTexts();

// 修改 el-dialog 默认点击遮照为不关闭
import { ElDialog } from 'element-plus';
ElDialog.props.closeOnClickModal.default = false;

const app = createApp(App);

app.use(ElementIcons);
app.use(router);
app.use(store);
app.use(plugins);
// 自定义指令
directive(app);

app.mount('#app');
