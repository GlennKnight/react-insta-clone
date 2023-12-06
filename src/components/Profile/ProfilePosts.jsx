import { Box, Grid, Skeleton } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import ProfilePost from './ProfilePost';

const ProfilePosts = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 2000)
    }, [])

    return (
        <Grid templateColumns={{ sm: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }} gap={1}>
            {
                isLoading ?
                    [0, 1, 2, 3, 4, 5].map((_, ix) => (<Skeleton key={ix} width={'full'}><Box h={300}></Box></Skeleton>)) :
                    <>
                        <ProfilePost image='/post_one.jpg' />
                        <ProfilePost image='/post_two.jpg' />
                        <ProfilePost image='/post_three.jpg' />
                        <ProfilePost image='/post_four.jpg' />
                    </>
            }
        </Grid>
    );
}

export default ProfilePosts;