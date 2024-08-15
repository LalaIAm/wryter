import {useState} from 'react'
import TextInput from './TextInput'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { setUser } from '../store/Auth/Auth.slice'
import { useDispatch } from 'react-redux'


const LoginForm = ({ className = '' }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
}