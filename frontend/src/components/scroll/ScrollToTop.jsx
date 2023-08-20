import { Fab, Zoom, useScrollTrigger } from "@mui/material";
import UpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useCallback } from "react";

export default function ScrollToTop() {
  const trigger = useScrollTrigger({
    threshold: 100,
  });
  const scrollToTob = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <Zoom in={trigger}>
        <Fab
          onClick={scrollToTob}
          sx={{ position: "fixed", bottom: 33, right: 33 }}
          size="small"
          variant="extended"
          color="primary"
          aria-label="add"
        >
          <UpIcon />
        </Fab>
      </Zoom>
    </div>
  );
}
