import * as readline from 'readline';

/**
 * Asks the user to enter their name and generates a message based on the provided name.
 * @returns A Promise that resolves with the user's name.
 */
export function askForNameAndGenerateMessage(): Promise<string> {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Please enter your name: ', (name: string) => {
    const message = generateMessage(name);
    console.log(message);
    rl.close();
    resolve(name);
  });
});
}

function generateMessage(personName: string): string {
  const message: string = `Hello ${personName}, would you like to learn some TypeScript today?`;
  return message;
}
