import { Avatar, Text, Flex, Button } from '@chakra-ui/react';
import useLogout from '../../hooks/useLogout';
import useAuthStore from '../../store/authStore';
import { Link } from 'react-router-dom';
const SuggestedHeader = () => {
    const { handleLogout, isLoggingOut } = useLogout();
    const authUser = useAuthStore(state => state.user);
    if (!authUser) return;
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} width={'full'}>
            <Flex alignItems={'center'} gap={2}>
                <Link to={authUser.username}>
                    <Avatar src={authUser.profilePicUrl} size={'lg'}></Avatar>
                </Link>
                <Link to={authUser.username}>
                    <Text fontSize={12} fontWeight={'bold'}>{authUser.username}</Text>
                </Link>
            </Flex>

            <Button size={'xs'} background={'transparent'} fontSize={14} fontWeight={'medium'} color={'blue.400'}
                _hover={{ color: 'white', background: 'transparent' }}
                isLoading={isLoggingOut} onClick={handleLogout} >
                Log out
            </Button>
        </Flex>
    )
}

export default SuggestedHeader;