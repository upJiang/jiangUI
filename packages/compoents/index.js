import MyButton from "./button/index"
import { version } from "../../package.json";

const components = [MyButton];

const install = (app, opts = {}) => {
    app.use(setupGlobalOptions(opts));
    components.forEach((component) => {
        app.use(component);
    });
};

const setupGlobalOptions = (opts = {}) => {
    return (app) => {
        app.config.globalProperties.$JIANG = {
            size: opts.size || "",
            zIndex: opts.zIndex || 2000,
        };
    };
};

const Jiang = {
    version,
    install,
};

export { MyButton, install };

export default Jiang;
