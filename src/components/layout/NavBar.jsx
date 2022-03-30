/** @jsxImportSource theme-ui */
import { Link, Box, Text, Flex } from "rebass";

const NavBar = () => {
  return (
    <Flex
      sx={{
        px: 5,
        py: 3,
        background: "primary",
        color: "background",
        fontFamily: "heading",
      }}
    >
      <Text p={2} fontWeight="bold">
        Rebass
      </Text>
    </Flex>
  );
};

export default NavBar;
