import { Box, VStack, Image, Input, Button, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handeAuth = () => {
        if (!inputs.email || !inputs.password) {
            alert('Please fill all the fields');
            return;
        }

        navigate('/')
    };

    return (
        <>
            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <VStack spacing={4}>
                    <Image src={'/logo.svg'} h={24} padding={2} cursor={'pointer'} alt='Logo' />
                    <Input placeholder='Email' type='email' fontSize={14}
                        value={inputs.email}
                        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}></Input>
                    <Input placeholder='Password' type='password' fontSize={14}
                        value={inputs.password}
                        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}></Input>
                    {
                        isLogin ? null :
                            <Input placeholder='Confirm Password' type='password' fontSize={14}
                                value={inputs.confirmPassword}
                                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}></Input>
                    }
                    <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14}
                        onClick={handeAuth}>{isLogin ? 'Log in' : 'Sign up'}</Button>
                    <Flex alignItems={'center'} justifyContent={'center'} my={4} gap={1} w={'full'}>
                        <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
                        <Text mx={1} color={'white'}>Or</Text>
                        <Box flex={2} h={'1px'} bg={'gray.400'}></Box>
                    </Flex>
                    <Flex alignItems={'center'} justifyContent={'center'} cursor={'pointer'}>
                        <Image src='/google.svg' w={4} alt='Google logo' />
                        <Text mx={2} color={'blue.500'}>Log in with Google</Text>
                    </Flex>
                </VStack>
            </Box>

            <Box border={'1px solid gray'} borderRadius={4} padding={5}>
                <Flex alignItems={'center'} justifyContent={'center'}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={'blue.500'} cursor={'pointer'}>
                        {isLogin ? 'Sign up' : 'Log in'}

                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm;