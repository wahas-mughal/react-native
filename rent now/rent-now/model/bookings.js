class Booking {
    constructor(bookingId, userId, vehicle, carImage,  rent, rentDuration, paymentMethod){
        this.bookingId = bookingId
        this.userId = userId,
        this.vehicle = vehicle,
        this.carImage = carImage,
        this.rent = rent,
        this.rentDuration = rentDuration,
        this.paymentMethod = paymentMethod
    }
}

export default Booking;