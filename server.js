// Simple local server - no external dependencies or providers
// Run with: node server.js

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const HOST = 'localhost';

// MIME types
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
    // Parse URL
    const parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;

    // Remove leading slash, default to index.html
    if (pathname === '/' || pathname === '') {
        pathname = 'index.html';
    }

    // Prevent directory traversal attacks
    pathname = pathname.replace(/\.\./g, '');

    const filepath = path.join(__dirname, pathname);

    // Check if file exists
    fs.stat(filepath, (err, stats) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - File Not Found</h1>', 'utf-8');
            return;
        }

        if (stats.isFile()) {
            // Get MIME type
            const ext = path.extname(filepath).toLowerCase();
            const contentType = mimeTypes[ext] || 'application/octet-stream';

            // Read and serve file
            fs.readFile(filepath, (err, content) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.end('<h1>500 - Server Error</h1>', 'utf-8');
                    return;
                }

                res.writeHead(200, {
                    'Content-Type': contentType,
                    'Cache-Control': 'no-cache',
                    'Access-Control-Allow-Origin': '*'
                });
                res.end(content);
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Not Found</h1>', 'utf-8');
        }
    });
});

server.listen(PORT, HOST, () => {
    console.log(`\n╔════════════════════════════════════════╗`);
    console.log(`║   Local Data Platform is Running      ║`);
    console.log(`╠════════════════════════════════════════╣`);
    console.log(`║  Open your browser and visit:         ║`);
    console.log(`║  http://localhost:${PORT}${' '.repeat(11)}║`);
    console.log(`║                                        ║`);
    console.log(`║  Press Ctrl+C to stop the server      ║`);
    console.log(`╚════════════════════════════════════════╝\n`);
});

// Handle server errors
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Port ${PORT} is already in use!`);
        console.error('Please close other applications using this port.\n');
    } else {
        console.error('Server error:', err);
    }
    process.exit(1);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\nServer stopped. Goodbye! 👋\n');
    process.exit(0);
});
