import Header from '../header/index'
import Aside from '../aside/menu'
import Head from 'next/head';
import style from './content.module.scss'

export default function Content({children}) {
    return (
        <>
            <Head>
                <title>
                    Pinterest
                </title>
                <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                      crossOrigin="anonymous"/>
            </Head>
            <Header/>
            <div className={style.content}>
                <Aside/>
                {children}
            </div>

        </>
    )
}