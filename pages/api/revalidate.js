export default async function handler(
    req,
    res,
) {
    await res.revalidate('/revalidate');

    return res.json({ revalidated: true })
}