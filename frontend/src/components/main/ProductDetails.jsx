import { AddShoppingCart, AddShoppingCartOutlined } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";

function ProductDetails() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2.5,
        flexDirection: { xs: "column", sm: "row" },
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img width={300} src="src\images\1.JPG" alt="" />
      </Box>
      <Box sx={{ textAlign: { xs: "center", sm: "left" } }}>
        <Typography variant="h5">Womens Fashion</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h5">
          $12.99
        </Typography>
        <Typography variant="body1" mr={1}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, fuga
          deserunt. Tenetur magni blanditiis ipsam nisi deleniti, sequi,
        </Typography>
        <Stack
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
          direction={"row"}
          gap={1}
          my={2}
        >
          {["src/images/1.JPG", "src/images/2.jpg"].map((item) => {
            return (
              <img
                style={{ borderRadius: 3 }}
                width={90}
                height={100}
                key={item}
                src={item}
                alt=""
              />
            );
          })}
        </Stack>

        <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy Now
        </Button>
      </Box>
    </Box>
  );
}

export default ProductDetails;
