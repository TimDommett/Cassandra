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
