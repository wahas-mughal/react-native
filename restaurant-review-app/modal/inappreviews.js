class InAppReviews {
  constructor(
    uid,
    placeid,
    profile_photo,
    username,
    restaurantName,
    review,
    rating,
    googleRatings,
    googleTotalRatings,
    googlePhotoUrl,
    timestamp
  ) {
    (this.uid = uid),
      (this.placeid = placeid),
      (this.profile_photo = profile_photo),
      (this.username = username),
      (this.restaurantName = restaurantName),
      (this.review = review),
      (this.rating = rating),
      (this.googleRatings = googleRatings),
      (this.googleTotalRatings = googleTotalRatings),
      (this.googlePhotoUrl = googlePhotoUrl),
      (this.timestamp = timestamp);
  }
}

export default InAppReviews;
