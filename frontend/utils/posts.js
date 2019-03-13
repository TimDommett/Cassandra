export const getPosts = () => $.ajax({
  url: '/api/posts',
});


export const createPost = postForm => (
  $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: postForm,
    // user: current_user,
    contentType: false,
    processData: false
  })
);
