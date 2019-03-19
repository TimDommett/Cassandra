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
    // user: current_user,
    contentType: false,
    processData: false
  })
);



export const updateComment = comment => (
$.ajax({
    method: 'PATCH',
    url: `/api/comments/${comment.id}`,
    data: { comment }
  })
);

export const destroyComment = comment => (
$.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`
  })
);
