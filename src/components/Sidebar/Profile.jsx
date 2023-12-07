import useAuthStore from '../../store/authStore';
import SidebarLink from './SidebarLink';
import { Avatar } from '@chakra-ui/react';

const Profile = () => {
    const authUser = useAuthStore(state => state.user);

    return (
        <>
            <SidebarLink text='Profile' icon={<Avatar size={'sm'} src={authUser?.profilePicUrl || ''} />} link={`/${authUser?.username}`} />
        </>
    )
}

export default Profile;