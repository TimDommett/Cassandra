export const fetchComments = () =>
 $.ajax({
    method: 'GET',
    url: `/api/comments`
  }
);

export const createComment = commentForm => (
  $.ajax({
    method: 'POST',
    url: `/api/comments`,
    data: commentForm,
    contentType: false,
    processData: false
  })
);

export const destroyComment = comment => (
$.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`
  })
);
