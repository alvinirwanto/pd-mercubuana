import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import { getSession, useSession, signOut } from "next-auth/react"


import Heropage from '../sections/Heropage'
import Layout from '../components/Layout'
import DataMahasiswa from '../sections/DataMahasiswa'
import guest from './guest'

export default function Home() {

    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
    }

    return (
        <div className={styles.container}>
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
        <guest />
    )
}

// Authorize User
function User({ session, handleSignOut }) {
    return (
        <main className="">
            {/* <Home /> */}
            <Layout
                pageTitle='PD Mercu Buana'
            >
                <Heropage />
                <DataMahasiswa />
                <div className='flex gap-9 my-8 items-center justify-center w-full'>
                    <div className='details'>
                        <h5>{session.user.name}</h5>
                        <h5>{session.user.email}</h5>
                    </div>
                    <button onClick={handleSignOut} className='px-10 py-2 rounded-sm bg-indigo-500 text-white'>Sign Out</button>
                </div>
            </Layout >
        </main>
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