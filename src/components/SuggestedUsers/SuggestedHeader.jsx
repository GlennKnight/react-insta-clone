import { Avatar, Text, Flex, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
const SuggestedHeader = () => {
    return (
        <Flex justifyContent={'space-between'} alignItems={'center'} width={'full'}>
            <Flex alignItems={'center'} gap={2}>
                <Avatar ame='John Smith' src='/profile.jpg' size={'lg'}></Avatar>
                <Text fontSize={12} fontWeight={'bold'}>jonsmith</Text>
            </Flex>

            <Link as={RouterLink} to={'/auth'} fontSize={14} fontWeight={'medium'} color={'blue.400'} _hover={{ color: 'white', textDecoration: 'none' }} >
                Log out
            </Link>
        </Flex>
    )
}

export default SuggestedHeader;