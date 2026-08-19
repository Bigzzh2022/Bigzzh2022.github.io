var posts=["2026/08/16/Git使用教程/","2026/08/19/博客使用教程/","2026/08/16/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };