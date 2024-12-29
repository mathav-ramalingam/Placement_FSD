

comment = async () => {
  return new Promise((commentpost) => {
    commentpost("Comment msg posted");
  });
};

postlike = async () => {
  return new Promise((liked) => {
    liked("post liked successfully");
  });
};


createpost = async () => {
    var post = new Promise((cpost) => {
      cpost("created successfully");
    });
    var [posts, comments, likes] = await Promise.all([post,comment(),postlike()]);
    console.log(posts);
    console.log(comments);
    console.log(likes);
  };
  createpost();



//Task  implement share ,unshare,unpost,unliked,uncomment