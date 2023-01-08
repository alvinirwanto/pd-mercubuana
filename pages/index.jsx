import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { getSession, useSession, signOut } from "next-auth/react"


import Heropage from '../sections/Heropage'
import Layout from '../components/Layout'
import DataMahasiswa from '../sections/DataMahasiswa'

import GuestPage from './guest'
import HomePage from './Home'

export default function Home() {

    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
    }

    return (
        <div>
            <Head>
                <title>Home Page</title>
            </Head>

            {session ? User({ session, handleSignOut }) : Guest()}
        </div>
    )
}

// Guest
function Guest() {
    return (
        <GuestPage />
    )
}

// Authorize User
function User({ session, handleSignOut }) {
    return (
        <HomePage />
    )
}


export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/guest',
                permanent: false
            }
        }
    }

    return {
        props: { session }
    }
}