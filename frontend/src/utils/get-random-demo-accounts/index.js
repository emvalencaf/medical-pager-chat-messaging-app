import { demoAccounts } from "../../constants/demo-accounts"

export const getRandomDemoAccounts = (username) => {
    const randomIndex = Math.floor(Math.random() * demoAccounts.length);

    const randomDemoAccount = demoAccounts[randomIndex];

    if (username === randomDemoAccount.username) return getRandomDemoAccounts(username);

    return randomDemoAccount;
}