import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";

const Iconsection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ mt: 3, bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff" }}
    >
      <Stack
        divider={
          useMediaQuery("(min-width:600px)") ? (
            <Divider orientation="vertical" flexItem />
          ) : null
        }
        sx={{ flexWrap: "wrap" }}
        direction={"row"}
        alignItems={"center"}
      >
        <MyBox
          icon={<ElectricBoltIcon />}
          title={"Fast Delivery"}
          subTitle={"start from 10$"}
        />
        <MyBox
          icon={<WorkspacePremiumIcon />}
          title={"Money Gureanty"}
          subTitle={"7 days back"}
        />
        <MyBox
          icon={<AccessAlarmIcon />}
          title={"365 days"}
          subTitle={"For Free Return"}
        />
        <MyBox
          icon={<CreditScoreIcon />}
          title={"Payment"}
          subTitle={"Secure System"}
        />
      </Stack>
    </Container>
  );
};

export default Iconsection;

const MyBox = ({ icon, title, subTitle }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "200px",
        display: "flex",
        flexGrow: 1,
        alignItems: "center",
        gap: 3,
        py: 1.6,
        justifyContent: useMediaQuery("(min-width:600px)") ? "center" : "left",
      }}
    >
      {icon}
      <Box>
        <Typography variant="body1">{title}</Typography>
        <Typography
          sx={{ fontWeight: 300, color: theme.palette.text.secondary }}
          variant="body1"
        >
          {subTitle}
        </Typography>
      </Box>
    </Box>
  );
};
