export default async function Page({ params }: { params: Promise<{ domain: string }> }) {

    const { domain: unreadableDomain } = await params;
    const domain = decodeURIComponent(unreadableDomain)

    return (
        <div className="flex flex-col gap-2">
            <p>{domain}</p>
        </div>
    );
}
