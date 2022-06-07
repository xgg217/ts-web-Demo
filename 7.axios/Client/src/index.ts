import axios from 'axios';

(() => {
  // get
  // axios({
  //   method: "GET",
  //   url: "http://localhost:3000/posts"
  // }).then(res => {
  //   console.log(res.data);

  // }).catch(err => {
  //   console.error(err);
  // });

  // post
  // axios({
  //   method: "POST",
  //   url: "http://localhost:3000/posts",
  //   data: {
  //     title: '修改',
  //     auttor: '123'
  //   }
  // }).then(res => {
  //   console.log(res.data);

  // }).catch(err => {
  //   console.error(err);
  // });

  // put
  // axios({
  //   method: "PUT",
  //   url: "http://localhost:3000/posts/1",
  //   data: {
  //     title: '修改12121',
  //     auttor: '里斯'
  //   }
  // }).then(res => {
  //   console.log(res.data);

  // }).catch(err => {
  //   console.error(err);
  // });

  // del
  // axios({
  //   method: "delete",
  //   url: "http://localhost:3000/posts/4",
  //   data: {
  //     title: '修改12121',
  //     auttor: '里斯'
  //   }
  // }).then(res => {
  //   console.log(res.data);

  // }).catch(err => {
  //   console.error(err);
  // });

})();

(() => {
  // get
  // axios.request({
  //   method: "GET",
  //   url: "http://localhost:3000/posts"
  // }).then(res => {
  //   console.log(res.data);

  // }).catch(err => {
  //   console.error(err);
  // });
  // axios.get('http://localhost:3000/posts', {
  // }).then(res => {
  //   console.log(res.data);

  // }).catch(err => {
  //   console.error(err);
  // });

  axios.post("http://localhost:3000/posts", {
    data: {
      title: '修改2',
      auttor: '1233'
    }
  }).then(res => {
    console.log(res.data);

  }).catch(err => {
    console.error(err);
  });


})();
