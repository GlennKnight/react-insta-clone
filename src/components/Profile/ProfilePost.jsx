import { Flex, GridItem, Text, Image, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, useDisclosure, Box, Avatar, Divider, VStack } from '@chakra-ui/react'
import { MdComment, MdDelete, MdFavorite } from 'react-icons/md';
import Comment from '../Comment/Comment';
import PostFooter from '../FeedPosts/PostFooter';

const ProfilePost = ({ image }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <GridItem cursor={'pointer'} borderRadius={4} overflow={'hidden'} border={'1 px'} borderColor={'whiteAlpha.300'} position={'relative'} aspectRatio={1 / 1}
                onClick={onOpen}>
                <Flex opacity={0} _hover={{ opacity: 1 }} position={'absolute'} top={0} left={0} h={'full'} width={'full'} bg={'blackAlpha.700'} transition={'all 300ms ease'} zIndex={1} justifyContent={'center'}>
                    <Flex alignItems={'center'} justifyContent={'center'} gap={50}>
                        <Flex gap={2} alignItems={'center'} >
                            <MdFavorite size={20} />
                            <Text fontWeight={'bold'}>7</Text>
                        </Flex>
                        <Flex gap={2} alignItems={'center'} >
                            <MdComment size={20} />
                            <Text fontWeight={'bold'}>3</Text>
                        </Flex>
                    </Flex>
                </Flex>
                <Image src={image} w={'full'} h={'full'} objectFit={'cover'} />
            </GridItem>

            <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{ base: '3xl', md: '5xl' }}>
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody bg={'black'}>
                        <Flex gap={4} width={{ base: '90%', md: 'full' }} mx={'auto'}>
                            <Box borderRadius={4} overflow={'hidden'} border={'1px solid'} borderColor={'whiteAlpha.300'} flex={1.5}>
                                <Image src={image} alt='Image' w={'100%'} h={'100%'} />
                            </Box>
                            <Flex flex={1} direction={'column'} px={10} display={{ base: 'none', md: 'flex' }}>
                                <Flex alignItems={'center'} justifyContent={'space-between'}>
                                    <Flex alignItems={'center'} gap={4}>
                                        <Avatar src='/profile.jpg' size={'sm'} name='John Smith' />
                                        <Text fontWeight={'bold'} fontSize={12}>johnsmith</Text>
                                    </Flex>
                                    <Box _hover={{ bg: 'whiteAlpha.300', color: 'red.600' }} borderRadius={4} p={1}>
                                        <MdDelete size={20} cursor={'pointer'} />
                                    </Box>
                                </Flex>
                                <Divider my={4} bg={'grey.500'} />
                                <VStack w={'full'} alignItems={'flex-start'} maxH={350} overflowY={'auto'}>
                                    <Comment createdAt='1d ago' username='QuantumRogue' avatar='/avatar_one.jpg' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
                                    <Comment createdAt='12h ago' username='NebulaWhisperer' avatar='/avatar_two.jpg' text='Morbi porttitor viverra ligula, sit amet rhoncus elit porta vel.' />
                                    <Comment createdAt='3d ago' username='BlazeCipher' avatar='/avatar_three.jpg' text='Vivamus egestas orci a maximus molestie.' />
                                </VStack>
                                <Divider my={4} bg={'gray.800'} />
                                <PostFooter isProfilePage={true} />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ProfilePost;