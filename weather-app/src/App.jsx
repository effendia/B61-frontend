import { useState } from 'react'


function App() {
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const API_KEY = '6cd3d59f9219eb6cbdbb3242178f57a1'

  function handleInputChange(e) {
    setCity(e.target.value)
  }

  async function handleSearch() {
    if (!city) {  
      setError("Kota tidak boleh kosong")
      return
    }

    try {
      setLoading(true)
      setError('')
      setWeather(null)

      //ambil data cuaca dri API openweather 
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )

      if (!res.ok) {
        throw new Error("Kota tidak ditemukan")
      }

      const data = await res.json()
      setWeather(data) //simpan
    } catch (err) {  //internet terputus
      setError(err.message)
    } finally {  
      setLoading(false)
    }
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1> Weather App</h1>

      <input 
        type="text" 
        placeholder="Masukkan nama kota..." 
        value={city} 
        onChange={handleInputChange}
      />

      <button onClick={handleSearch}>🔍 Lihat Cuaca</button>

      {loading && <p> Sedang mencari cuaca...</p>}
      {error && <p style={{ color: 'red' }}>⚠️ {error}</p>}

      {weather && (
        <div>
          <h2>Cuaca di {weather.name}</h2>
          <p> Suhu: {weather.main.temp}°C</p>
        </div>
      )}
    </div>
  )
}

export default App

