export const isLikedByReqUser =(reqUserId, post)=>{
  for (let user of post.likedPost) {
      if (reqUserId === user.id) {
        return true;
      }
    }
    return false;
  };