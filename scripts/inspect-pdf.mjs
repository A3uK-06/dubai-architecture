import fs from 'fs';
import zlib from 'zlib';

const buf = fs.readFileSync('uxpeak-ui-ux-playbook.pdf');
console.log('File size:', buf.length);

// Find /Title or /Author or metadata
const textSlice = buf.subarray(0, 100000).toString('latin1');
const infoMatches = textSlice.match(/\/Title|\/Author|\/Subject|\/Keywords|\/Creator/g);
console.log('Info markers in head:', infoMatches);

// Find end of PDF (trailer, /Info, etc.)
const tailSlice = buf.subarray(Math.max(0, buf.length - 200000)).toString('latin1');
console.log('Tail contains Info:', /Info \d+ \d+ R/.test(tailSlice));

// Search for streams and inflate them
let streamCount = 0;
let textSnippets = [];

let pos = 0;
while (pos < buf.length && streamCount < 200) {
  const streamIdx = buf.indexOf(Buffer.from('stream\r\n'), pos);
  const streamIdx2 = buf.indexOf(Buffer.from('stream\n'), pos);
  let start = -1;
  let offset = 0;
  if (streamIdx !== -1 && (streamIdx2 === -1 || streamIdx <= streamIdx2)) {
    start = streamIdx;
    offset = 8;
  } else if (streamIdx2 !== -1) {
    start = streamIdx2;
    offset = 7;
  }
  if (start === -1) break;

  const end = buf.indexOf(Buffer.from('endstream'), start + offset);
  if (end === -1) break;

  const streamData = buf.subarray(start + offset, end);
  try {
    const decompressed = zlib.inflateSync(streamData);
    const str = decompressed.toString('utf-8');
    // Check if it looks like content text (Tj or TJ)
    if (str.includes('Tj') || str.includes('TJ') || str.includes('BT')) {
      const plain = str.replace(/[^\x20-\x7E\u0400-\u04FF]/g, ' ')
                       .replace(/\s+/g, ' ')
                       .trim();
      if (plain.length > 50) {
        textSnippets.push(plain.substring(0, 300));
      }
    }
  } catch (e) {
    // not flate or corrupted
  }

  pos = end + 9;
  streamCount++;
}

console.log('Extracted snippets count:', textSnippets.length);
console.log('First 5 snippets:\n', textSnippets.slice(0, 5).join('\n---\n'));
fs.writeFileSync('extracted_snippets.txt', textSnippets.join('\n\n=====\n\n'), 'utf-8');
