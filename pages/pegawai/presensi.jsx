import React from 'react'
import Layout from '../../components/Layout'

const Presensi = () => {
    return (
        <Layout
            pageTitle='Presensi'
        >
            <div className='pt-[10rem]'>
                <iframe
                    title="UMB Presensi Dashboard 030223 - Page 1"
                    // width="600" height="486" 
                    className='w-full h-screen'
                    src="https://app.powerbi.com/view?r=eyJrIjoiZDU4NjQzZGMtMTMzYy00YmVmLWIzNjktNzI2NDIwMGRiMGMxIiwidCI6ImZlOTZiY2VlLTc0YjEtNDQxNS1hNWE4LTZiYmJlNGNmMjUxMiIsImMiOjEwfQ%3D%3D&pageName=ReportSection0ca669535a15e9d83ea2" frameborder="0" allowFullScreen="true"></iframe>

            </div>
        </Layout>
    )
}

export default Presensi
