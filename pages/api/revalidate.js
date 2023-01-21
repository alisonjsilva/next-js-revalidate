export default async function handler(
    req,
    res,
) {
    res.revalidate('/revalidate');

    return res.json({ revalidated: true })
}