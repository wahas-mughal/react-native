export const ISLIKED = 'ISLIKED';

export const isLiked = (likeId) => {
    return{
        type: ISLIKED,
        payload: likeId
    }
}