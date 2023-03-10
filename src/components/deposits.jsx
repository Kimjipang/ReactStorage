import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Project</Title>
      <Typography component="p" variant="h4"></Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 09 February, 2023
      </Typography>
      <div>
        <Link color="primary" href="/project" onClick={preventDefault}>
          View Project
        </Link>
      </div>
    </React.Fragment>
  );
}
