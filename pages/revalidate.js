import getFile from "@/data/readFiles";
import NodeCache from "node-cache";

const cache = new NodeCache();

export default function Index({ data }) {
    console.log(data);
    return (
        <div>
            This page needs to be revalidate
            <p>{data.random}</p>
            <p>{data.cacheResult.value}</p>
        </div>
    )
}

export async function getStaticProps(context) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const f = await getFile();
    console.log(f);

    const cacheResult = await handleCache('routes-table');
    console.log(cacheResult);

    // const randomToCache = getRandomInt(500000);

    return {
        props: {
            data: { random: getRandomInt(300000), cacheResult }
        }
    }
}

async function handleCache(key) {


    let value = cache.get(key);
    console.log('value', value);
    if (value === undefined) {
        value = await getFile();
        console.log('put in cache');
        const success = cache.set(key, value, 100000);
        if (success)
            console.log('success in put cache');
    } else {
        console.log('from cache');
    }

    return value;
}