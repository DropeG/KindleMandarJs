import axios from 'axios';
import * as cheerio from "cheerio";

export const scrapeWebsite = async (url) => {
        const baseUrl = 'https://libgen.gs/index.php?req=';
        const completeUrl = baseUrl + encodeURIComponent(url);
        console.log(completeUrl)
        try {
    
        const { data: html } = await axios.get(completeUrl);
        // Step 2: Load the HTML into Cheerio
        const $ = cheerio.load(html);

        const tbody = $('tbody');

        const results = [];

        tbody.find('tr').each((index, element) => {
            const cells = $(element).find('td')
            const rowData = cells.map((i, cell) => $(cell).text().trim()).get();

            if(rowData.length > 0) {
                    const book = {
                        title: rowData[0],
                        author: rowData[1],
                        language: rowData[4],
                        ext: rowData[7]
                    };
                    if ((book.language == "Spanish" || book.language == "English") && (book.ext == 'epub')) {
                        results.push(book)
                    }
                    
                }
                console.log(rowData);
            });
            return results;
        } catch (error) {
            console.error("ERROR SCRAPING", error.message);
            throw new Error("ERROR SCRAPIN")
        }
}
