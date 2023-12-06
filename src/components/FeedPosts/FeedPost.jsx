import { Box, Image, VStack } from '@chakra-ui/react';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';

const FeedPost = ({ image, username, avatar }) => {
    return (
        <VStack gap={3}>
            <PostHeader username={username} avatar={avatar} />
            <Box borderRadius={4} overflow={'hidden'}>
                <Image src={image} />
            </Box>
            <PostFooter username={username} />
        </ VStack>
    );
}

export default FeedPost;