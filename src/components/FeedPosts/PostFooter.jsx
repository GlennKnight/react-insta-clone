import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { MdComment, MdFavorite, MdFavoriteBorder } from 'react-icons/md';

const PostFooter = ({ username, isProfilePage }) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true)
            setLikes(likes + 1);
        }
    };

    return (
        <Flex width={'full'} gap={2} direction={'column'} mt={'auto'}>
            <Flex width={'full'} direction={'column'}>
                <Flex alignItems={'center'} gap={4} width={'full'}>
                    <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
                        {liked ? <MdFavorite color='red' /> : <MdFavoriteBorder />}
                    </Box>

                    <Box cursor={'pointer'} >
                        <MdComment></MdComment>
                    </Box>
                </Flex>
            </Flex>
            <Flex width={'full'} direction={'column'}>
                <Text fontWeight={600} fontSize={'sm'}>
                    {likes} likes
                </Text>
                {
                    isProfilePage ?
                        null :
                        <>
                            <Text fontWeight={700} fontSize={'sm'}>
                                <Text as={'span'}>{username}</Text>
                                &nbsp;
                                <Text as={'span'} fontWeight={400}>Feeling good</Text>
                            </Text>
                            <Text color={'gray'} fontSize={'sm'}>
                                View all 1,000 comments
                            </Text>
                        </>
                }
                <InputGroup>
                    <Input variant={'flushed'} placeholder={'Add a comment'} fontSize={14} />
                    <InputRightElement>
                        <Button fontSize={14} color={'blue.500'} variant={'ghost'} fontWeight={600} _hover={{ color: 'white' }}>Post</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Flex>
    );
}

export default PostFooter;