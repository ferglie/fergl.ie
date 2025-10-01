export async function load({ fetch, url }) {
    console.log('[+page.server] load function called');
    console.log('[+page.server] URL origin:', url.origin);
    
    try {
        const apiUrl = `${url.origin}/api/visit`;
        console.log('[+page.server] Fetching from:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('[+page.server] Response status:', response.status);
        
        const r = await response.json();
        console.log('[+page.server] Response data:', JSON.stringify(r));
        console.log('[+page.server] Count:', r.body.count);
        
        return {
            count: r.body.count
        };
    } catch (error) {
        console.error('[+page.server] Error loading visit count:', error);
        console.error('[+page.server] Error details:', error instanceof Error ? error.message : String(error));
        
        // Return 0 count on error so the page still loads
        return {
            count: 0
        };
    }
}