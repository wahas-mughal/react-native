class InAppReviews {
  constructor(
    uid,
    placeid,
    username,
    restaurantName,
    review,
    rating,
    googleRatings,
    googleTotalRatings,
    googlePhotoUrl
  ) {
    (this.uid = uid),
      (this.placeid = placeid),
      (this.username = username),
      (this.restaurantName = restaurantName),
      (this.review = review),
      (this.rating = rating),
      (this.googleRatings = googleRatings),
      (this.googleTotalRatings = googleTotalRatings),
      (this.googlePhotoUrl = googlePhotoUrl);
  }
}

export default InAppReviews;
