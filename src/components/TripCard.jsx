function TripCard({id, title, date, onBook}) {

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{date}</p>
      <button onClick={() => { onBook(id) }} className="btn bg-amber-600 p-4 rounded-md cursor-pointer">Book Now</button>
    </div>
  )
}

export default TripCard
