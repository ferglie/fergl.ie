export async function load({ fetch, url }) {
    console.log('[+page.server] load function called');
    console.log('[+page.server] URL origin:', url.origin);
    
    try {
        const apiUrl = `${url.origin}/api/visit`;
        console.log('[+page.server] Fetching from:', apiUrl);
        
        const response = await fetch(apiUrl);
        console.log('[+page.server] Response status:', response.status);
        
        if (!response.ok) {
            console.error('[+page.server] Response not OK');
            const errorText = await response.text();
            console.error('[+page.server] Error response:', errorText);
            return { count: 0 };
        }
        
        const r = await response.json();
        console.log('[+page.server] Response data:', JSON.stringify(r));
        
        if (r.body && typeof r.body.count === 'number') {
            console.log('[+page.server] Count:', r.body.count);
            return {
                count: r.body.count
            };
        } else {
            console.error('[+page.server] Invalid response format:', r);
            return { count: 0 };
        }
    } catch (error) {
        console.error('[+page.server] Error loading visit count:', error);
        console.error('[+page.server] Error details:', error instanceof Error ? error.message : String(error));
        console.error('[+page.server] Error stack:', error instanceof Error ? error.stack : 'No stack');
        
        // Return 0 count on error so the page still loads
        return {
            count: 0
        };
    }
}