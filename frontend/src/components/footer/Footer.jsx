import { Box, Button, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#2b3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and Developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: 18,
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Hussein Brek
        </Button>
        @2023
      </Typography>
    </Box>
  );
};

export default Footer;
