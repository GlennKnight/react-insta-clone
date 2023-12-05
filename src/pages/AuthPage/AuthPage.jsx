import { Flex, Container, Image, Box, VStack } from '@chakra-ui/react';
import AuthForm from '../../components/AuthForm/AuthForm';

const AuthPage = () => {
    return (
        <Flex minH={'100vh'} justifyContent={'center'} alignItems={'center'} px={4}>
            <Container maxW={'container.md'} padding={0}>
                <Flex justifyContent={'center'} alignItems={'center'} gap={10}>
                    {/* Left hand-side */}
                    <Box display={{ base: 'none', md: 'block' }}>
                        <Image src='/blob.svg' height={650} alt='Blob' />
                    </Box>
                    {/* Right hand-side */}
                    <VStack spacing={4} align={'stretch'}>
                        <AuthForm />
                        <Flex gap={5} justifyContent={'center'}>
                            <Image src='/award.svg' h={16} alt='Award' />
                        </Flex>
                    </VStack>
                </Flex>
            </Container>
        </Flex>
    )
}

export default AuthPage;