import { Flex, Box } from '@chakra-ui/react'
import Sidebar from '../../components/Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    const [user] = useAuthState(auth);
    const canRenderSidebar = pathname !== '/auth' && user;

    return (
        <Flex>
            {/* Sidebar on the left */}
            {canRenderSidebar ?
                <Box w={{ base: '64px', md: '232px' }}>
                    <Sidebar />
                </Box>
                : null
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