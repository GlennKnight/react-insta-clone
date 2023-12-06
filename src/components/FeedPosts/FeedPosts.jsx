import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';
import FeedPost from './FeedPost';
import { useEffect, useState } from 'react';

const FeedPosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000)
    }, [])

    return (
        <Container maxW={'container.sm'} py={10} px={2} display={'flex'} gap={10} flexDirection={'column'}>
            {isLoading ? [0, 1, 2, 3].map((_, ix) => (
                <VStack gap={4} key={ix} alignItems={'flex-start'}>
                    <Flex gap={2}>
                        <SkeletonCircle size={10}></SkeletonCircle>
                        <VStack gap={2} alignItems={'flex-start'}>
                            <Skeleton h={10} w={200}></Skeleton>
                        </VStack>
                    </Flex>
                    <Skeleton width={'full'}>
                        <Box h={400}></Box>
                    </Skeleton>
                </VStack>
            )) : <>
                <FeedPost username='QuantumRogue' image='/post_one.jpg' avatar='/avatar_one.jpg' />
                <FeedPost username='NebulaWhisperer' image='/post_two.jpg' avatar='/avatar_two.jpg' />
                <FeedPost username='BlazeCipher' image='/post_three.jpg' avatar='/avatar_three.jpg' />
                <FeedPost username='TechSphinx' image='/post_four.jpg' avatar='/avatar_four.jpg' />
            </>
            }

        </Container >
    );
}

export default FeedPosts;