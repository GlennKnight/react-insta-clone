import { VStack, Flex, Text, Box, Link } from '@chakra-ui/react';
import SuggestedUser from './SuggestedUser';
import SuggestedHeader from './SuggestedHeader';

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4} position={'sticky'} top={0} >
            <SuggestedHeader />
            <Flex align={'center'} justifyContent={'space-between'} w={'full'} >
                <Text fontSize={12} fontWeight={'bold'} color={'gray.500'}>
                    Suggested for you
                </Text>
                <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
                    See All
                </Text>
            </Flex>
            <SuggestedUser name='QuantumRogue' followers={1392} avatar='/avatar_one.jpg' />
            <SuggestedUser name='NebulaWhisperer' followers={567} avatar='/avatar_two.jpg' />
            <SuggestedUser name='BlazeCipher' followers={759} avatar='/avatar_three.jpg' />
            <Box alignSelf={'flex-start'} fontSize={12} color={'gray.500'}>
                &copy; 2023 Built By <Link href='https://glennknight.dev' target='_blank' color={'blue.500'}>Glenn Knight</Link>
            </Box>
        </ VStack>
    )
}

export default SuggestedUsers;