import { Avatar, Flex, Box, Text } from '@chakra-ui/react';

const PostHeader = ({ username, avatar }) => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar src={avatar} alt='Post One' size={'sm'} />
                <Flex fontSize={12} fontWeight={'bold'} gap={2}>
                    <Box>{username}</Box>
                    <Box color={'gray.500'}>&middot; 1w</Box>
                </Flex>
            </Flex>
            <Box cursor={'pointer'}>
                <Text fontSize={12} color={'blue.500'} fontWeight={'bold'} _hover={{ color: 'white' }} transition={'color 200ms ease-out'}>Unfollow</Text>
            </Box>
        </Flex>
    );
}

export default PostHeader;