import React from 'react'
import Layout from '../../components/Layout'

const Pressensi = () => {
    return (
        <Layout
            pageTitle='Pressensi'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="UMB Pressensi Dashboard 240123 - Page 1"
                    // width="600" height="486" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiMTMwZTJhZGItYzVkMy00NzU0LWExOGMtNzNhMjEzY2YwNTAyIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default Pressensi
