import TripCard from "./TripCard"

function TripList() {

  const handleBookingClick = (tripId) => {
    alert(`Trip Number ${tripId} has been booked`)
  }
  return (
    <div className="flex justify-end flex-col items-end">
      <h2 className="bg-white p-3">Trip List</h2>
      <TripCard id={1} title={"One Way Trip"} date="20-2-2032" onBook={handleBookingClick} />
      <TripCard id={1} title={"One Way Trip"} date="20-2-2022" onBook={handleBookingClick} />
      <TripCard id={1} title={"One Way Trip"} date="20-2-2026" onBook={handleBookingClick}/>
      <TripCard id={1} title={"One Way Trip"} date="20-2-2027" onBook={handleBookingClick}/>
    </div>
  )
}

export default TripList
