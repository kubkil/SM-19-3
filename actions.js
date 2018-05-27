import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP = 'THUMB_UP';
export const THUMB_DOWN = 'THUMB_DOWN';

// payload: text?
export const addComment = text => ({
  type: ADD_COMMENT,
  id: uuid.v4(),
  text
})

export const editComment = (text, id) => ({
  type: EDIT_COMMENT,
  id,
  text
})

export const removeComment = id => ({
  type: REMOVE_COMMENT,
  id
})

// index zamiast id?
export const thumbUp = commentId => ({
  type: THUMB_UP,
  id: commentId
})

export const thumbDown = commentId => ({
  type: THUMB_DOWN,
  id: commentId
})