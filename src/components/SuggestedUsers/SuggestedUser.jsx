import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import useFollowUser from '../../hooks/useFollowUser';
import useAuthStore from '../../store/authStore';

const SuggestedUser = ({ user, setUser }) => {
    const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
    const authUser = useAuthStore(state => state.user);

    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing ?
                user.followers.filter((follower) => follower.uid !== authUser.uid)
                : [...user.followers, authUser.uid]
        });
    }
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} w={'full'}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar src={user.profilePicUrl} size={'md'} />
                <VStack spacing={2} align={'flex-start'}>
                    <Box fontSize={12} fontWeight={'bold'}>{user.fullName}</Box>
                    <Box fontSize={11} color={'gray.500'}>{user.followers.length} followers</Box>
                </VStack>
            </Flex>
            {authUser.uid !== user.uid ?
                <Button fontSize={13} bg={'transparent'} p={0} height={'max-content'} fontWeight={'medium'}
                    color={'blue.400'} _hover={{ color: 'white', bg: 'transparent' }}
                    isLoading={isUpdating} onClick={onFollowUser}>{isFollowing ? 'Unfollow' : 'Follow'}</Button>
                : null}
        </Flex>
    )
}

export default SuggestedUser;