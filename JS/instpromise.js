

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

unpostlike = async () => {
  return new Promise((unliked) => {
    unliked("post unliked successfully");
  });
};



share = async () => {
  return new Promise((shared) => {
    shared("post shared successfully");
  });
};

unshare = async () => {
  return new Promise((unshared) => {
    unshared("post unshared successfully");
  });
};

unpost = async() => {
  return new Promise((unpost) =>
  {
    unpost("unpost successfully")
  })
}

createpost = async () => {
    var post = new Promise((cpost) => {
      cpost("created successfully");
    });
    var [posts, comments, likes ,unlikes, shares , unshares,unposts] = await Promise.all([post,comment(),postlike(),unpostlike(),share(),unshare(),unpost()]);
    console.log(posts);
    console.log(comments);
    console.log(likes);
    console.log(unlikes);
    console.log(shares);
    console.log(unshares);
    console.log(unposts);
  };
  createpost();



//Task  implement share ,unshare,unpost,unliked,uncomment