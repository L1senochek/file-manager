const parseCommand = (input) => {
    const parts = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (char === '"') {
            inQuotes = !inQuotes;
            continue;
        }

        if (char === ' ' && !inQuotes) {
            if (current.length > 0) {
                parts.push(current);
                current = '';
            }
        } else {
            current += char;
        }
    }

    if (current.length > 0) {
        parts.push(current);
    }

    return parts;
};

export default parseCommand;
