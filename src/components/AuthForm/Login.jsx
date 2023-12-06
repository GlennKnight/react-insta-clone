import { Input, Button } from '@chakra-ui/react';
import { useState } from 'react';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    return (
        <>
            <Input placeholder='Email' type='email' fontSize={14}
                value={inputs.email} size={'sm'}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}></Input>
            <Input placeholder='Password' type='password' fontSize={14}
                value={inputs.password} size={'sm'}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}></Input>
            <Button w={'full'} colorScheme='blue' size={'sm'} fontSize={14}>Log in</Button>
        </>
    )
}

export default Login;