import Vue from "nativescript-vue";

// import routes from "./routes";
// import BackendService from "./services/backend-service";
import App from "./components/App";
import Home from "./components/Home";
import LoginPage from "./components/Login";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
Vue.use(RadSideDrawer);
Vue.registerElement('CardView', () => require('./nativescript-cardview').CardView);

Vue.config.silent = (TNS_ENV === 'production');

// const backendService = new BackendService();
// Vue.prototype.$backendService = backendService;

// new Vue({
//   render: h => h("frame", [h(backendService.isLoggedIn() ? routes.home : routes.login)])
// }).$start();

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(LoginPage, { slot: 'mainContent' })
          ]
        )
      }
    // render: h => h('frame', [h(LoginPage)])
}).$start();
