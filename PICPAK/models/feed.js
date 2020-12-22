class Feed {
    constructor(feedId, isLiked, user, profileDescription, postImage, totalLikes, time, likedId, fullname, whoLiked, photoLiked){
        this.feedId = feedId,
        this.isLiked = isLiked,
        this.user = user,
        this.profileDescription = profileDescription,
        this.postImage = postImage,
        this.totalLikes = totalLikes,
        this.time = time,
        this.likedId = likedId,
        this.fullname = fullname,
        this.whoLiked = whoLiked,
        this.photoLiked = photoLiked
    }
}

export default Feed;