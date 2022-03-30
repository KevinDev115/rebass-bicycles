/** @jsxImportSource theme-ui */
import { Box, Heading } from "rebass";
import BicyclesList from "../components/lists/BicyclesList";

const HomePage = () => {
  return (
    <>
      <Box
        sx={{
          p: 6,
          bg: "secondary",
        }}
      >
        <Heading
          fontSize={[5, 6, 7]}
          color="primary"
          fontFamily="monospace"
          style={{ textAlign: "center" }}
        >
          Welcome to the best store to buy your bike :D
        </Heading>
      </Box>
      <BicyclesList />
    </>
  );
};

export default HomePage;
