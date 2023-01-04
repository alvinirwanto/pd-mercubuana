import React from 'react'
import Layout from '../../components/Layout'

const Saldo = () => {
    return (
        <Layout
            pageTitle='Saldo'
        >
            <div className='mt-[10rem]'>
                <iframe
                    title="Saldo Dashboard 040123 - Halaman 1"
                    className='w-full h-screen scale-[1.1]'
                    // width="600" height="373.5"
                    src="https://app.powerbi.com/view?r=eyJrIjoiMWQwYTYxN2UtOWRjZC00YzI0LWFiNTMtOTI1MjVjN2VkNDdhIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
            </div>
        </Layout>
    )
}

export default Saldo