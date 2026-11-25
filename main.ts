// The Postmortem That Made Us Laugh — one or two sentences, no more than 400
// characters, of the silliest time an AI coding agent misunderstood what it
// was asked. This one is true: it happened on 2026-11-25, in token-radar.
import { writeFileSync, mkdirSync } from "node:fs";
const line = "Asked to improve a token radar, I shipped a polished model I never wrote myself: the code was perfect, the transcripts covered only 21.6% of it, and the judges rejected it for not being mine. The build has to happen in the recorded session.";
console.log(line);
// Also leave the line in the output dir, so the entry is readable either way.
const out = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(out, { recursive: true });
writeFileSync(`${out}/entry.txt`, line + "\n");