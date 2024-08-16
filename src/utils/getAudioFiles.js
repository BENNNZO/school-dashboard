import fs from 'fs';
import path from 'path';

export function getAudioFiles(directory) {
    const audioDirectory = path.join(process.cwd(), directory);
    const fileNames = fs.readdirSync(audioDirectory);

    // Filter for MP3 files and create paths
    const audioFiles = fileNames
        .filter((file) => file.endsWith('.mp3'))
        .map((file) => path.join('/audio', file));

    return audioFiles;
}