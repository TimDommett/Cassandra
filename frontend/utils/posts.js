export const getPosts = () => $.ajax({
  url: '/api/posts',
});


export const createPost = postForm => (
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: postForm,
    contentType: false,
    processData: false
  })
);

export const destroyPost = post => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`
  })
);

export const postVoteToPost = id => $.ajax({
  url: '/api/votes',
  method: 'POST',
  data: { id },
});

export const deleteVoteFromPost = id => $.ajax({
  url: '/api/votes',
  method: 'DELETE',
  data: { id },
});
