let user = {
  name: "tan",
  age: 21,
  email: "tan.lethaitan@gmail.com",
  firstName: "le",
  blogs: ["this a blog"],
  login: () => {
    console.log("hello this is a test");
  },
  logout: () => {
    console.log("user log out");
  },
  logblog() {
    console.log(this.blogs);
  },
  // logblog1: function () {
  //   console.log(this.blogs);
  // },
};
// console.log(user);
// console.log(user["age"]);
// user.login();
user.logblog();
