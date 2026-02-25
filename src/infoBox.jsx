import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import GrainIcon from "@mui/icons-material/Grain";
import WaterDropIcon from "@mui/icons-material/WaterDrop";

export default function InfoBox({ info }) {

  const getWeatherIcon = () => {
    const weather = info.weather.toLowerCase();

    if (weather.includes("rain") || weather.includes("drizzle")) {
      return <GrainIcon sx={{ fontSize: 120, color: "#2196f3" }} />;
    } 
    else if (weather.includes("cloud")) {
      return <CloudIcon sx={{ fontSize: 120, color: "#90a4ae" }} />;
    } 
    else if (weather.includes("thunder")) {
      return <ThunderstormIcon sx={{ fontSize: 120, color: "#ff9800" }} />;
    } 
    else if (weather.includes("snow") || info.temp < 5) {
      return <AcUnitIcon sx={{ fontSize: 120, color: "#03a9f4" }} />;
    } 
    else if (weather.includes("mist") || weather.includes("haze")) {
      return <WaterDropIcon sx={{ fontSize: 120, color: "#607d8b" }} />;
    }
    else {
      return <WbSunnyIcon sx={{ fontSize: 120, color: "#fbc02d" }} />;
    }
  };

  return (
    <Card sx={{ padding: 5, borderRadius: 6 }}>
      <CardContent>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            mb: 4
          }}
        >
          {getWeatherIcon()}

          <Box>
            <Typography variant="h4" fontWeight="600">
              {info.city}
            </Typography>

            <Typography variant="h2" fontWeight="700">
              {info.temp}°C
            </Typography>

            <Typography>
              {info.weather} • Feels like {info.feelsLike}°C
            </Typography>
          </Box>
        </Box>

        {/* Bottom Glass Cards */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          <Box
            sx={{
              flex: 1,
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: 4,
              padding: 2,
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            💧
            <Typography variant="body2">Humidity</Typography>
            <Typography fontWeight="600">{info.humidity}%</Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: 4,
              padding: 2,
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            🌡
            <Typography variant="body2">Min</Typography>
            <Typography fontWeight="600">{info.temp_min}°C</Typography>
          </Box>

          <Box
            sx={{
              flex: 1,
              background: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              borderRadius: 4,
              padding: 2,
              textAlign: "center",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)"
            }}
          >
            🔥
            <Typography variant="body2">Max</Typography>
            <Typography fontWeight="600">{info.temp_max}°C</Typography>
          </Box>
        </Box>

      </CardContent>
    </Card>
  );
}