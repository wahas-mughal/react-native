export const ISLIKED = 'ISLIKED';
export const LIKEDPOST = 'LIKEDPOST';

export const isLiked = (likeId) => {
    return{
        type: ISLIKED,
        payload: likeId
    }
}