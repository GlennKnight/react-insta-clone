import { useSignInWithEmailAndPassword, } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase';
import useShowToast from './useShowToast';
import useAuthStore from '../store/authStore';
import { doc, getDoc } from 'firebase/firestore';

const useLogin = () => {
    const [signInWithEmailAndPassword, , loading, error] = useSignInWithEmailAndPassword(auth);
    const showToast = useShowToast();
    const loginUser = useAuthStore(state => state.login);

    const handleLogin = async (inputs) => {
        if (!(inputs.email && inputs.password)) {
            showToast('Error', 'Please fill all the fields', 'error');
            return;
        }
        try {
            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);
            if (userCred) {
                const docRef = doc(firestore, 'users', userCred.user.uid);
                const docSnap = await getDoc(docRef);
                const userDoc = docSnap.data();
                localStorage.setItem('user-info', JSON.stringify(userDoc));
                loginUser(userDoc);
            }

        } catch (error) {
            showToast('Error', error.message, 'error');
        }
    }

    return { handleLogin, isLoggingIn: loading, error };
}

export default useLogin