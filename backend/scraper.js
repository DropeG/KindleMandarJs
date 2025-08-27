import axios from 'axios';
import * as cheerio from "cheerio";

export const scrapeWebsite = async (url) => {
        const baseUrl = 'https://libgen.gs/index.php?req=';
        const completeUrl = baseUrl + encodeURIComponent(url)+"&covers=on";
        console.log(completeUrl)
        try {
            const { data: html } = await axios.get(completeUrl);
            // Step 2: Load the HTML into Cheerio
            const $ = cheerio.load(html);

            const tbody = $('tbody');

            const results = [];

            for (const element of tbody.find('tr').toArray()){
                const cells = $(element).find('td')
                const rowData = cells.map((i, cell) => {
                    if (i==0) {
                        const imageUrl = $(cell).find('img').attr('src')
                        console.log("Image URL:", imageUrl);
                        return 'https://libgen.gs' + imageUrl
                    }
                    return $(cell).text().trim();
                }).get();

                const mirrorLink = cells.eq(10).find('a').filter((i, el) => $(el).text() === '1').attr('href');
                let downloadLink = null;

                if (mirrorLink){
                    const mirrorUrl = 'https://libgen.gs' + mirrorLink;
                    try {
                        const {data: mirrorHtml} = await axios.get(mirrorUrl);
                        const $mirror = cheerio.load(mirrorHtml);

                        downloadLink = $mirror('a:contains("GET")').attr('href');
                        if (downloadLink) {
                            downloadLink = 'https://libgen.gs' + downloadLink;
                        }
                    } catch (error) {
                        console.error('Error fetching Mirror 1 page:', error.message)
                    }
                }

                if(rowData.length > 0) {
                        const book = {
                            cover: rowData[0],
                            title: rowData[1],
                            author: rowData[2],
                            year: rowData[4],
                            language: rowData[5],
                            ext: rowData[8],


                        };
                        if ((book.language == "Spanish" || book.language == "English") && (book.ext == 'epub')) {
                            results.push(book)
                        }

                    }
                    console.log("ROWDATA:", rowData);
                };
                return results;
        } catch (error) {
            console.error("ERROR SCRAPING", error.message);
            throw new Error("ERROR SCRAPIN")
        }
}
