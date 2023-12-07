import { MdSearch } from 'react-icons/md';
import SidebarLink from './SidebarLink';
import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import useSearchUser from '../../hooks/useSearchUser';
import { useRef } from 'react';
import SuggestedUser from '../SuggestedUsers/SuggestedUser';

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { user, isLoading, getUserProfile, setUser } = useSearchUser();
    const searchRef = useRef();

    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value);
    }
    return (
        <>
            <Box onClick={onOpen} w={'full'}>
                <SidebarLink text='Search' icon={<MdSearch size={24} />} />
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} motionPreset='slideInLeft'>
                <ModalOverlay />
                <ModalContent bg={'black'} border={'1px solid gray'} maxH={'400px'}>
                    <ModalHeader>Search user</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody p={6}>
                        <form onSubmit={handleSearchUser}>
                            <FormControl>
                                <FormLabel>Username</FormLabel>
                                <Input placeholder='Username' ref={searchRef}></Input>
                            </FormControl>
                            <Flex w={'full'} justifyContent={'flex-end'}>
                                <Button type='submit' ml={'auto'} size={'sm'} my={4} isLoading={isLoading}>Search</Button>
                            </Flex>
                        </form>
                        {user && <SuggestedUser user={user} setUser={setUser} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Search;