import Head from 'next/head';
import { MetaDataProps } from '@/Interface/types/metadata';
import { MetaData } from '@/Interface/constant/metadata';

const metadata: MetaDataProps = MetaData[1];

// # Contact Head
const ContactHead = () => {
    return (
        <Head>
            <title>Contact</title>
            <meta name="description" content={metadata.description} />
            <link rel="icon" href={metadata.icons} />
        </Head>
    );
};

export default ContactHead;
