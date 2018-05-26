import uuid from uuid;
export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

{
  type: ADD_COMMENT,
  id,
  text,
  author
}

{
  type: EDIT_COMMENT,
  id,
  text
}

{
  type: REMOVE_COMMENT,
  id
}

{
  type: THUMB_UP,
  likesNumber
}

{
  type: THUMB_DOWN,
  dislikesNumber
}

function addComment(text, author) {
  return {
    type: ADD_COMMENT,
    text,
    author,
    id: uuid.v4()
  }
}

// jak przekazać właściwe id?
function editComment(text, id) {
  return {
    type: EDIT_COMMENT,
    text,
    id
  }
}

function removeComment(id) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

function thumbUp(likesNumber) {
  return {
    type: THUMB_UP,
    likesNumber
  }
}

function thumbDown(dislikesNumber) {
  return {
    type: THUMB_DOWN,
    dislikesNumber
  }
}