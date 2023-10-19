import { Box, Flex, IconButton, Input, Text, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      paddingX="4"
      paddingY="2"
      borderBottom="1px"
      borderColor="gray.200"
    >
      {/* Logo */}
      <Box flex="1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHoreyJ7D4p1Miyxi4m6dB1naN2TIFNNLUQ&usqp=CAU" alt="Logo" width="40" height="40" />
      </Box>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search"
        marginRight="4"
      />

      {/* Explore */}
      <Text marginRight="4">Explore</Text>

      {/* Collection */}
      <Text marginRight="4">Collection</Text>

      {/* Community */}
      <Text marginRight="4">Community</Text>

      {/* Dark/Light Mode Toggle */}
      <IconButton
        aria-label="Toggle Dark Mode"
        icon={isDark ? <SunIcon /> : <MoonIcon />}
        onClick={toggleColorMode}
      />
    </Flex>
  );
};

export default NavBar;
