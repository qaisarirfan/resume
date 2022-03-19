import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Variants() {
  return (
    <Stack spacing={1}>
      <Skeleton animation="wave" variant="text" width={300} height={40} />
      <Skeleton animation="wave" variant="text" width={200} height={15} />
    </Stack>
  );
}
