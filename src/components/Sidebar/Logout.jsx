import { MdLogout } from 'react-icons/md';
import { Box, Button, Flex, Tooltip } from '@chakra-ui/react';
import useLogout from '../../hooks/useLogout';

const Logout = () => {
    const { handleLogout, isLoggingOut } = useLogout();

    return (
        <>
            <Tooltip hasArrow label='Logout' placement='right' ml={1} openDelay={500} display={{ base: 'block', md: 'none' }}>
                <Button
                    display={'flex'}
                    alignItems={'center'}
                    variant={'ghost'}
                    gap={4}
                    _hover={{ bg: 'whiteAlpha.400' }}
                    borderRadius={6}
                    w={'full'}
                    p={3}
                    justifyContent={{ base: 'center', md: 'flex-start' }}
                    onClick={() => handleLogout()}
                    isLoading={isLoggingOut}
                    fontWeight={'normal'}>
                    <Flex alignItems={'center'} justifyContent={'center'} w={6} h={6}> <MdLogout size={24} /></Flex>
                    <Box display={{ base: 'none', md: 'block' }}>Log out</Box>
                </Button>
            </Tooltip>
        </>
    )
}

export default Logout;