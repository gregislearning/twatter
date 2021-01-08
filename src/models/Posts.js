export default {
    name: "Posts",
    state: [
      {
        author: "Greg",
        post: "Test Post"
      }
    ],
    reducers: {
      addPost(state, payload) {
        return [...state, payload];
      }
    }
  };
  