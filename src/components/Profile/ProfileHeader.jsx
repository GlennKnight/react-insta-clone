import { Avatar, AvatarGroup, Button, Flex, Text, VStack } from '@chakra-ui/react';

const ProfileHeader = () => {
    return (
        <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>
            <AvatarGroup size={{ base: 'xl', md: '2xl' }} justifySelf={'center'} alignSelf={'flex-start'} mx={'auto'}>
                <Avatar name='John Smith' src='/profile.jpg' alt='Profile' />
            </AvatarGroup>
            <VStack alignItems={'flex-start'} gap={2} mx={'auto'} flex={1}>
                <Flex gap={4} direction={{ base: 'column', sm: 'row' }} justifyContent={{ base: 'center', sm: 'flex-start' }} w={'full'}>
                    <Text fontSize={{ base: 'sm', md: 'lg' }}>johnsmith</Text>
                    <Flex gap={4} alignItems={'center'} justifyContent={'center'}>
                        <Button bg={'white'} color={'black'} _hover={{ bg: 'whiteAlpha.800' }} size={{ base: 'xs', md: 'sm' }}>Edit Profile</Button>
                    </Flex>
                </Flex>
                <Flex alignItems={'center'} gap={{ base: 2, sm: 4 }}>
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as={'span'} fontWeight={'bold'}>4</Text>
                        &nbsp;
                        <Text as={'span'}>Posts</Text>
                    </Text>
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as={'span'} fontWeight={'bold'}>149</Text>
                        &nbsp;
                        <Text as={'span'}>Followers</Text>
                    </Text>
                    <Text fontSize={{ base: 'xs', md: 'sm' }}>
                        <Text as={'span'} fontWeight={'bold'}>175</Text>
                        &nbsp;
                        <Text as={'span'}>Following</Text>
                    </Text>
                </Flex>
                <Flex alignItems={'center'} gap={4}>
                    <Text fontSize={'sm'} fontWeight={'bold'}>John Smith</Text>
                </Flex>
                <Text fontSize={'sm'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </VStack>
        </Flex>
    )
}

export default ProfileHeader;