import { Box, Flex, IconButton, Input, Text, useColorMode, Image } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-around"
      borderColor="gray.200"
    >
      {/* Logo */}
      <Box flex="1"> 
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ43MOJcAoKgjHKSxh9lXMudqSZz3lTkT1DEw&usqp=CAU" alt="Logo" width={"100px"} />
      </Box>

      {/* Search Bar */}
      <Input
        type="text"
        placeholder="Search"
        marginRight="4"
        width={"68%"}
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
