import { Box, Flex, Link, Tooltip } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom'

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

export default SidebarLink;