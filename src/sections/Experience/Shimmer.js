import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import React from "react";

export default function Variants() {
	return (
		<Stack spacing={1}>
			<Skeleton animation="wave" height={40} variant="text" width={300} />
			<Skeleton animation="wave" height={15} variant="text" width={200} />
		</Stack>
	);
}
