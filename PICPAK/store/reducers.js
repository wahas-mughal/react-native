import { FEED } from "../data/dummy-data";
import { GALLERY } from "../data/dummy-data";
import { ISLIKED } from "./actions";

const initialState = {
  feed: FEED,
  gallery: GALLERY,
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
        feed: updatedState
      }
  }
  return state;
};
