import { init } from "@rematch/core";
import Posts from "./Posts";

const store = init({
  models: {
    Posts
  }
});

export default store;
