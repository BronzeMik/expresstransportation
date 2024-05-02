function ScheduleRide() {
  return (
    <div className="schedule-ride" id='schedule'>
      <h2>Schedule a Ride</h2>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value="63544a0e-9b88-41a6-b2a3-425805d70a6b" />
        <input type="hidden" name="subject" value="New Contact Form Submission from Web3Forms" />
        <input type="hidden" name="from_name" value="Transportation website" />
        <label htmlFor="date">Date:</label>
        <input type="date" id="date" name="date" />

        <label htmlFor="time">Time:</label>
        <input type="time" id="time" name="time" />

        <label htmlFor="pickupLocation">Pickup Location:</label>
        <input type="text" id="pickupLocation" name="pickupLocation" />

        <label htmlFor="dropoffLocation">Dropoff Location:</label>
        <input type="text" id="dropoffLocation" name="dropoffLocation" />

        <button type="submit">Schedule Ride</button>
      </form>
    </div>
  );
}

export default ScheduleRide;
