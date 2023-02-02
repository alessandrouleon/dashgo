import { Avatar, Box, Flex, Text } from "@chakra-ui/react";


interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (

    <Flex align='center'>
      {showProfileData && (
        <Box mr={4} textAlign='center'>
          <Text>Alessandro Uleon</Text>
          <Text color='gray.300' fontSize='small'>alessandro.uleon@gmail.com</Text>
        </Box>
      )}
      <Avatar
        size='md'
        name='Alessadnro Uleon'
        src="https://xesque.rocketseat.dev/users/avatar/profile-d3073b26-4738-4055-99ad-c0b225bd4781-1674083140242.jpg" />

    </Flex>
  );
}