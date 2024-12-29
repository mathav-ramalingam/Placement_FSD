comment = async () => {
  let comment = true;
  return new Promise((commentpost, err) => {
    if (comment == true) {
      commentpost("Comment posted succesfully");
    } else {
      err("failed to post comment");
    }
  });
};

uncomment = async () => {
  let uncomment = true;
  return new Promise((uncommentpost, err) => {
    if (uncomment == true) {
      uncommentpost("successfuly comment removed");
    } else {
      err("failed in removing the comment");
    }
  });
};

postlike = async () => {
  let pl = true;
  return new Promise((liked, err) => {
    if (pl == true) {
      liked("Post liked successfully");
    } else {
      err("Failed to like the post");
    }
  });
};

unpostlike = async () => {
  let upl = true;
  return new Promise((unliked, err) => {
    if (upl == true) {
      unliked("Post unliked successfully");
    } else {
      err("Failed to unlike the post");
    }
  });
};

share = async () => {
  let s = true;
  return new Promise((shared, err) => {
    if (s == true) {
      shared("Post shared successfully");
    } else {
      err("Failed to share the post");
    }
  });
};

unshare = async () => {
  let us = true;
  return new Promise((unshared) => {
    if (us == true) {
      unshared("Post unshared successfully");
    } else {
      err("Failed to unshare the post");
    }
  });
};

createpost = async () => {
  let p = true
  return new Promise((cpost,err) => {
    if (p == true) {
      cpost("Post created successfully");
    } else {
      err("Failed to create the post");
    }
  });
};


managepost = async() => {
 
  const result  = await Promise.all([createpost(),comment(),uncomment(),postlike(),unpostlike(),share(),unshare()])
  return result
}

managepost()
.then((result) =>
{
  result.forEach(element => {console.log(element); });
})
.catch((error) =>{
  console.error("An error occurred:", error);
})

