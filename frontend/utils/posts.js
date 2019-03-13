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

// export const editPost = postForm => (
//   $.ajax({
//     method: 'POST',
//     url: 'api/posts',
//     data: postForm,
//     // user: current_user,
//     contentType: false,
//     processData: false
//   })
// );


export const revisePost = post => (
  $.ajax({
    method: 'PATCH',
    url: `/api/posts/${post.id}`,
    data: { post }
  })
);

export const destroyPost = post => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`
  })
);
