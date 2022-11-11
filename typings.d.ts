export type Todo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export type SearchResult = {
    organic_results: [
        {
            position: number,
            title: string,
            link: string,
            displayed_link: string,
            date: string,
            snippet: string,
            snippet_highlighted_words: Array,
            sitelinks: object,
            about_this_result: object,
            about_page_link: string,
            about_page_serpapi_link: string,
            cached_page_link: string,
        }
    ]
}