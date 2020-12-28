class Booking {
    constructor(bookingId, userId, vehicle, rent, rentDuration, paymentMethod){
        this.bookingId = bookingId
        this.userId = userId,
        this.vehicle = vehicle,
        this.rent = rent,
        this.rentDuration = rentDuration,
        this.paymentMethod = paymentMethod
    }
}

export default Booking;