import React from 'react'
import { getSession, useSession, signOut } from "next-auth/react"

const Footer = () => {

    const { data: session } = useSession()

    function handleSignOut() {
        signOut()
        return {
            redirect: {
                destination: '/guest',
                permanent: false
            }
        }
    }


    return (
        <footer className='z-[100] w-full px-[5rem] py-4 bg-gray-100 text-center flex justify-between'>
            <p>© 2022 Universitas Mercu Buana</p>
            <div className='flex gap-9 items-center justify-center'>
                {/* <div className='details'>
                    <h5>{session.user.name}</h5>
                    <h5>{session.user.email}</h5>
                </div> */}
                <button onClick={handleSignOut} className='px-10 py-2 rounded-sm bg-indigo-500 text-white'>Sign Out</button>
            </div>
        </footer>
    )
}

export default Footer