import Vue, { PluginObject } from "vue";

export type Options = {};

export type State = {
  hasError: boolean;
  message: string;
};

declare module "vue/types/vue" {
  interface Vue {
    $error: State;
  }
}

const state = Vue.observable<State>({ hasError: false, message: "" });

Vue.config.errorHandler = err => {
  state.hasError = true;
  state.message = err.message;

  setTimeout(() => {
    state.hasError = false;
    state.message = "";
  }, 3000);
};

export const errorPlugin: PluginObject<Options> = {
  install(Vue) {
    Vue.prototype.$error = state;
  }
};
