import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e5e122abcee3ffa7217f176ad5f7a697"; 
    const getWeatherInfo = async () => {
        const response = await fetch(
            `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
        );

        const data = await response.json();

        if (!response.ok) {
            throw new Error("City not found");
        }

        return {
            city: data.name,
            temp: data.main.temp,
            temp_min: data.main.temp_min,
            temp_max: data.main.temp_max,
            humidity: data.main.humidity,
            feelsLike: data.main.feels_like,
            weather: data.weather[0].description,
        };
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (city.trim() === "") {
            setError("Please enter a city name");
            return;
        }

        try {
            const newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError("");
            setCity("");
        } catch {
            setError("No such place exists!");
            updateInfo(null);
        }
    };

    return (
        <div style={{ marginBottom: "30px" }}>
            <h2
                style={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#0d3b66"
                }}
            >
                🌤️ Weather App
            </h2>
            <br />
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Enter City"
                    variant="outlined"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    fullWidth
                    sx={{
                        backgroundColor: "rgba(255,255,255,0.8)",
                        borderRadius: "30px",
                        "& fieldset": { borderRadius: "30px" },
                    }}
                />

                <Button
                    type="submit"
                    variant="contained"
                    startIcon={<SearchIcon />}
                    sx={{
                        marginTop: "20px",
                        borderRadius: "30px",
                        padding: "12px 30px",
                        fontWeight: "600",
                        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
                    }}
                >
                    Search
                </Button>

                {error && (
                    <p style={{ color: "red", marginTop: "15px" }}>{error}</p>
                )}
            </form>
        </div>
    );
}