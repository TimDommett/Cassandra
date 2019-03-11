export const getPosts = () => $.ajax({
  url: '/api/posts',
});

export const postLikeToPost = id => $.ajax({
  url: '/api/votes',
  method: 'POST',
  data: { id },
});

export const deleteLikeFromPost = id => $.ajax({
  url: '/api/votes',
  method: 'DELETE',
  data: { id },
});
