import fs from "fs"
import path from "path"

export default function Index({ data }) {
    return (
        <div>
            This page needs to be revalidate
            <p>{data}</p>
        </div>
    )
}

export async function getStaticProps(context) {

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    const filePath = path.join(process.cwd(), 'public', `data.json`);

    let dataResult = [];
    try {
        console.log('Getting from: ', filePath);
        if (fs.existsSync(filePath)) {
            dataResult = JSON.parse(
                fs.readFileSync(filePath, 'utf-8')
            )
        } else {
            console.log(`fail to get route table`, filePath);
        }
    } catch (error) {
        console.error(error);
    }

    console.log(dataResult)

    return {
        props: {
            data: getRandomInt(300000)
        }
    }
}