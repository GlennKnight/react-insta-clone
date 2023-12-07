import Home from './Home';
import Search from './Search';
import Notifications from './Notifications';
import Create from './Create';
import Profile from './Profile';
import Logout from './Logout';
import { Box } from '@chakra-ui/react';

const SidebarItems = () => {
    return (
        <>
            <Home />
            <Search />
            <Notifications />
            <Create />
            <Profile />
            <Box flex={1}></Box>
            <Logout />
        </>
    )
}

export default SidebarItems;