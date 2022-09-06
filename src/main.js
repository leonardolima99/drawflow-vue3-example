import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as Icons from "@element-plus/icons-vue";

console.log(Icons);

import App from "./App.vue";

const app = createApp(App);

app.use(Icons);
app.use(ElementPlus);

app.mount("#app");
