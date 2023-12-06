import { Box, Flex, Text } from '@chakra-ui/react';
import { MdBookmark, MdGrid3X3, MdFavoriteBorder } from 'react-icons/md';

const ProfileTabs = () => {
    return (
        <Flex w={'full'} justifyContent={'center'} gap={{ base: 4, sm: 10 }} textTransform={'uppercase'} fontWeight={'bold'}>
            <Flex borderTop={'1px solid white'} alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
                <Box fontSize={20}>
                    <MdGrid3X3 />
                </Box>
                <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>Posts</Text>
            </Flex>
            <Flex alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
                <Box fontSize={20}>
                    <MdBookmark />
                </Box>
                <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>Saved</Text>
            </Flex>
            <Flex alignItems={'center'} p={3} gap={1} cursor={'pointer'}>
                <Box fontSize={20}>
                    <MdFavoriteBorder />
                </Box>
                <Text fontSize={12} display={{ base: 'none', sm: 'block' }}>Likes</Text>
            </Flex>
        </Flex>
    )
}

export default ProfileTabs;