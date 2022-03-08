import styled from "@emotion/styled";
import Typography from "@mui/material/Typography";

export const Main = styled.main`
  background-image: url("/images/javascript-background.jpg");
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
  min-height: 500px;
  position: relative;

  :before {
    background: rgba(0, 0, 0, 0.8);
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.palette.getContrastText(theme.palette.text.primary)};
  margin: auto;
  max-width: 700px;
  position: relative;
  z-index: 2;
`;
