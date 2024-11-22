import {useState} from "react";
interface IProps {
    title: string,
    handleClick: (email:string, pass:string) => void
}

const Form = ({title, handleClick}:IProps) => {
    const [email,setEmail] = useState("")
    const [pass, setPass] = useState("")
    return (
        <div className="flex mt-[30px] g-[10px] flex-col justify-center items-center">
            <form action="">
                <input type="email"
                       autoComplete="on"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       className="w-[590px] hover:cursor-pointer h-[60px] p-5  border-b text-[19px]"
                       placeholder="Email"
                />
                <input type="password"
                       autoComplete="on"
                       value={pass}
                       onChange={(e) => setPass(e.target.value)}
                       className="w-[590px] hover:cursor-pointer h-[60px] p-5  border-b text-[19px]"
                       placeholder="Password"
                />
            </form>
            <button
                className="hover:text-black hover:bg-gray-300 hover:border-orange mt-[20px] text-[19px] text-white border w-[590px] h-[60px] rounded-2xl bg-black"
                onClick={() => handleClick(email, pass)}>
                {title}
            </button>
        </div>
    );
};

export default Form;