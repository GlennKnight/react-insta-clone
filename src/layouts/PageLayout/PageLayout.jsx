import { Flex, Box } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();

    return (
        <Flex>
            {/* Sidebar on the left */}
            {pathname == '/auth' ? null :
                <Box w={{ base: '64px', md: '232px' }}>
                    <Sidebar />
                </Box>
            }
            {/* Page content on the right */}
            {/* <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}> */}
            <Box flex={1}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout;