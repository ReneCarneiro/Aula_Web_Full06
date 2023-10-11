import React from 'react'
import Head from "next/head"
import { useRouter } from 'next/navigation'
import MyInput from '../../components/input'
import styles from './styles.module.css'
export default function UserPage() {
    const router = useRouter()
    const [name, setName] = React.useState('')
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [passConfirm, setPassConfirm] = React.useState('')
    function save() {
        if (!name || name.trim() === '') {
            alert('Nome é obrigatório')
            return
        }
        if (!username || username.trim() === '') {
            alert('Login é obrigatório')
            return
        }
        if (!password || password.trim() === '') {
            alert('Senha é obrigatória')
            return
        }
        if (password !== passConfirm) {
            alert('A Senha não confere')
            return
        }

        // Add aqui o salvar do User

        router.back()
    }