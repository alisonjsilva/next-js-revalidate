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

    return {
        props: {
            data: getRandomInt(300000)
        }
    }
}