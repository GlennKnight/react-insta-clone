import { Box, Flex, Image, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'
import SidebarItems from './SidebarItems';

const Sidebar = () => {
    return (
        <Box height={'100vh'} borderRight={'1px solid'} borderColor={'whiteAlpha.300'} py={8} px={2} position={'sticky'} top={0} left={0}>
            <Flex direction={'column'} gap={10} w={'full'} h={'full'} >
                <Link to={'/'} as={RouterLink} height={12} p={2} borderRadius={6} _hover={{ bg: 'whiteAlpha.200' }} >
                    <Image src='/logo.svg' display={{ base: 'none', md: 'block' }} />
                    <Image src='/logo-icon.svg' display={{ base: 'block', md: 'none' }} />
                </Link>
                <Flex direction={'column'} gap={3} alignItems={'center'} h={'full'}>
                    <SidebarItems />
                </Flex>
            </Flex>
        </Box >
    )
}

export default Sidebar;