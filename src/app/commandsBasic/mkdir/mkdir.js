import fs from 'fs';
import path from 'path';
import { colorize } from "../../utils/index.js";

const mkdir = async (directoryName) => {
    try {
        const currentDirectory = process.cwd();
        const directoryPath = path.join(currentDirectory, directoryName);

        fs.mkdir(directoryPath, { recursive: false }, (error) => {
            if (error) {
                console.log(colorize('Operation failed', 'red'));
            }
        });
    } catch (error) {
        console.log(colorize('Operation failed', 'red'));
    }
};

export default mkdir;
