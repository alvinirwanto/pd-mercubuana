import Heropage from '../sections/Heropage'
import Layout from '../components/Layout'
import DataMahasiswa from '../sections/DataMahasiswa'

import { getSession } from 'next-auth/react'

export default function HomePage() {
    return (
        <Layout
            pageTitle='PD Mercu Buana'
        >
            <Heropage />
            <DataMahasiswa />
        </Layout >
    )
}

export async function getServerSideProps({ req }) {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: "/login",
                premanent: false
            }
        }
    }
    // authorize user return session
    return {
        props: { session }
    }
}
