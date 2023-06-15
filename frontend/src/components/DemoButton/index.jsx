import { getRandomDemoAccounts } from "../../utils/get-random-demo-accounts";

const DemoButton = ({
    username,
    setForm,
    form,
}) => {

    // handle click event
    const handleClick = () => {
        const demoAccount = getRandomDemoAccounts(username || "");

        console.log(demoAccount);

        setForm((prevState) => ({
            ...prevState,
            username: demoAccount.username,
            password: demoAccount.password,
        }))

        console.log(form);
    }

    return (
        <button
            type="button"
            onClick={handleClick}
        >
            Get a DEMO account
        </button>
    );
};

export default DemoButton;