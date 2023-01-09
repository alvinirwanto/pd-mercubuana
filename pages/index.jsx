import Head from 'next/head'
import { getSession, useSession, signOut } from "next-auth/react"

import GuestPage from './guest'
import HomePage from './home'

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