import { Avatar, Box, Flex, Image, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'
import { MdHome, MdSearch, MdNotifications, MdCreate, MdLogout } from 'react-icons/md';

const SidebarLink = ({ text, link, icon }) => {
    return (
        <Tooltip hasArrow label={text} placement='right' ml={1} openDelay={500} display={{ base: 'block', md: 'none' }}>
            <Link display={'flex'}
                to={link || null}
                as={RouterLink}
                alignItems={'center'}
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                w={'full'}
                p={3}
                justifyContent={{ base: 'center', md: 'flex-start' }}>
                <Flex alignItems={'center'} justifyContent={'center'} w={6} h={6}>{icon}</Flex>
                <Box display={{ base: 'none', md: 'block' }}>{text}</Box>
            </Link>
        </Tooltip>
    );
}

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
            icon: <Avatar size={'sm'} name='Glenn Knight' />,
            text: 'Profile',
            link: '/'
        }
    ];
    return (
        <Box height={'100vh'} borderRight={'1px solid'} borderColor={'whiteAlpha.300'} py={8} px={2}>
            <Flex direction={'column'} gap={10} w={'full'} h={'full'} >
                <Link to={'/'} as={RouterLink} height={12} p={2} borderRadius={6} _hover={{ bg: 'whiteAlpha.200' }} >
                    <Image src='/logo.svg' display={{ base: 'none', md: 'block' }} />
                    <Image src='/logo-icon.svg' display={{ base: 'block', md: 'none' }} />
                </Link>
                <Flex direction={'column'} gap={3} alignItems={'center'} h={'full'}>
                    {sidebarItems.map((item, index) => <SidebarLink key={index} text={item.text} icon={item.icon} link={item.link} />)}
                    <Box flex={1}></Box>
                    <SidebarLink text='Logout' icon={<MdLogout size={24} />} link='/auth' />
                </Flex>
            </Flex>
        </Box >
    )
}

export default Sidebar;