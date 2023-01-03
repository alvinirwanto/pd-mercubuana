import Heropage from '../sections/Heropage'
import Layout from '../components/Layout'
import DataMahasiswa from '../sections/DataMahasiswa'

export default function Home() {
    return (
        <Layout
            pageTitle='PD Mercu Buana'
        >
            <Heropage />
            <DataMahasiswa />
        </Layout >
    )
}
