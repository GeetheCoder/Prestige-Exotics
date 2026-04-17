export default function AdminAddVehicle() {

  const submitVehicle = async (e) => {

    e.preventDefault()

    await fetch("http://localhost:8080/api/vehicles", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        make,
        model,
        year,
        price,
        image
      })
    })
  }

}