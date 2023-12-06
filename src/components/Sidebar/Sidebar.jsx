import { Avatar, Box, Flex, Image, Link, Button, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'
import { MdHome, MdSearch, MdNotifications, MdCreate, MdLogout } from 'react-icons/md';
import SidebarLink from './SidebarLink';
import useLogout from '../../hooks/useLogout';

const Sidebar = () => {
    const sidebarItems = [
        {
            icon: <MdHome size={24} />,
            text: 'Home',
            link: '/'
        },
        {
            icon: <MdSearch size={24} />,
            text: 'Search',
        },
        {
            icon: <MdNotifications size={24} />,
            text: 'Notifications',
        },
        {
            icon: <MdCreate size={24} />,
            text: 'Create'
        },
        {
            icon: <Avatar size={'sm'} name='John Smith' src='/profile.jpg' />,
            text: 'Profile',
            link: '/glennantknight'
        }
    ];
    const { handleLogout, isLoggingOut } = useLogout();
    return (
        <Box height={'100vh'} borderRight={'1px solid'} borderColor={'whiteAlpha.300'} py={8} px={2} position={'sticky'} top={0} left={0}>
            <Flex direction={'column'} gap={10} w={'full'} h={'full'} >
                <Link to={'/'} as={RouterLink} height={12} p={2} borderRadius={6} _hover={{ bg: 'whiteAlpha.200' }} >
                    <Image src='/logo.svg' display={{ base: 'none', md: 'block' }} />
                    <Image src='/logo-icon.svg' display={{ base: 'block', md: 'none' }} />
                </Link>
                <Flex direction={'column'} gap={3} alignItems={'center'} h={'full'}>
                    {sidebarItems.map((item, index) => <SidebarLink key={index} text={item.text} icon={item.icon} link={item.link} />)}
                    <Box flex={1}></Box>
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
                </Flex>
            </Flex>
        </Box >
    )
}

export default Sidebar;