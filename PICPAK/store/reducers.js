import { FEED } from "../data/dummy-data";
import { GALLERY } from "../data/dummy-data";
import { LIKE } from "../data/dummy-data";
import { ISLIKED, AUTH } from "./actions";

const initialState = {
  feed: FEED,
  gallery: GALLERY,
  likes: LIKE,
  userId: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ISLIKED:
      const updatedState = state.feed.map((item) => {
        if (item.feedId === action.payload) {
          return {
            ...item,
            isLiked: !item.isLiked,
          };
        } else {
          return item;
        }
      });
      return {
        ...state,
        feed: updatedState,
      };
    case AUTH:
      return {
        ...state,
        userId: action.payload,
      };
  }
  return state;
};
