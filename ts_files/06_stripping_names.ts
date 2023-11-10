export function stripWhitespace() {

    const nameWithWhitespace: string = '\t  Gul Taskeen \n';
    console.log(`Name with whitespace: "${nameWithWhitespace}"`);

    const strippedName: string = nameWithWhitespace.trim();
    console.log(`Stripped Name: "${strippedName}"`);

}