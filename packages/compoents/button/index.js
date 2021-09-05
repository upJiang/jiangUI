/* eslint-disable prettier/prettier */
import MyButton from "./src/Button.vue";

MyButton.install = (app) => app.component("MyButton", MyButton);

export default MyButton;