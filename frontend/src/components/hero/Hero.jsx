import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import Iconsection from "./Iconsection";

const slider = [
  { text: "MAN", link: "src/images/banner-15.jpg" },
  { text: "WOMEN", link: "src/images/banner-25.jpg" },
];

const Hero = () => {
  const theme = useTheme();
  return (
    <Container>
      <Box
        sx={{ pt: 2, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slider.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} alt="" />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("sm")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      color: "#222",
                    }}
                    variant="h6"
                  >
                    LIFESTYLE COLLECTION
                  </Typography>
                  <Typography
                    sx={{
                      color: "#222",
                      fontWeight: 400,
                      my: 1,
                    }}
                    variant="h4"
                  >
                    {item.text}
                  </Typography>
                  <Stack
                    sx={{
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography color={"#333"} mr={1} variant="h5">
                      SALE UP TO
                    </Typography>
                    <Typography color={"#d23f57"} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>
                  <Typography
                    sx={{ color: "#000", fontWeight: "300", my: 1 }}
                    variant="body1"
                  >
                    Get Free Shipping on orders over 99.00$
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69 , 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69 , 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    SHOP NOW
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box sx={{ display: { xs: "none", md: "block" }, minWidth: "26.4%" }}>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-17.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2b3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2b3445", fontSize: "16px", mt: 1 }}
              >
                SUMMER
              </Typography>
              <Typography variant="h6" sx={{ color: "#2b3445" }}>
                SALE 20% OFF
              </Typography>
              <Link
                sx={{
                  color: "#sb3445",
                  display: "flex",
                  fontSize: "15px",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#d23f57" },
                }}
                href="#"
                underline="none"
              >
                shop now <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
          <Box sx={{ position: "relative" }}>
            <img width={"100%"} src="src\images\banner-16.jpg" alt="" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 20,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2b3445", fontSize: "18px" }}
              >
                Gaming 4K
              </Typography>
              <Typography
                variant="h6"
                sx={{ color: "#2b3445", fontSize: "16px", mt: 1 }}
              >
                Desktop &
              </Typography>
              <Typography variant="h6" sx={{ color: "#2b3445" }}>
                Laptop
              </Typography>
              <Link
                sx={{
                  color: "#sb3445",
                  display: "flex",
                  fontSize: "15px",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#d23f57" },
                }}
                href="#"
                underline="none"
              >
                shop now <ArrowForwardIcon sx={{ fontSize: "13px" }} />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>

      <Iconsection />
    </Container>
  );
};

export default Hero;
