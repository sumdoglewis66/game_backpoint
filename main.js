default {
    async fetch(request, env) {
      const url = new URL(request.url);
			
			if (url.pathname.startsWith('connection_status')) {
				try {
						// check online status
						if (request.method === 'GET') {
							const status = true
							return new Response(JSON.stringify(status)) , {
								headers: {
                            'Content-Type': 'application/json',
                            ...corsHeaders
                        }
                    });
                }
