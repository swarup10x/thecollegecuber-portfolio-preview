async function loadPageData() {
    try {
        const response = await fetch("https://thecollegecuber.devconsort.com:3099/api/page");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        let pageJson = await response.json();
        
        return pageJson
 
    } catch (error) {
        console.error("There was a problem fetching the images:", error);
        return [];
    }
}
export async function load() {

    let pageData=await loadPageData()
    console.log('loading data', pageData)

    return {
        page: pageData
    };
}