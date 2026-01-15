export default async function getWikiResults(searchTerm: string) {
    const searchParams = new URLSearchParams({
        action: 'query',
        generator: 'search',
        gsrsearch: searchTerm,
        gsrnamespace: '0',
        gsrlimit: '20',
        prop: 'pageimages|extracts|info',
        exchars: '100',
        exintro: '100',
        explaintext: 'true',
        exlimit: 'max',
        format: 'json',
        origin: '*',
        continue: '',
    });

    try {
        const response = await fetch('https://en.wikipedia.org/w/api.php?' + searchParams);

        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        if (!data || !data.query) {
            throw new Error('Invalid response from API');
        }

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}
