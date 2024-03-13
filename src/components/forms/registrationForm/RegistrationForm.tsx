import { useState } from "react"
import Input from "../../customInput/CustomInput"
import { Link, useNavigate } from "react-router-dom"
import Button, { ButtonProps } from "../../customButton/CustomButton"
import { useCreateUserMutation } from "../../../redux/api/usersApi"

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const [createUser] = useCreateUserMutation();
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const handleGetEmail = (value: string) => {
        setEmail(value)
    }

    const handleGetUserName = (value: string) => {
        setUserName(value)
    }

    const handleGetPassword = (value: string) => {
        setPassword(value)
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await createUser({ email, password, userName });
        if (result) {
            setEmail("")
            setPassword("")
            setUserName("")
            navigate("/login");

        }

    }

    const loginButtonProps: ButtonProps = {
        type: "submit",
        variant: "primary",
        color: "blue",
        width: "300px"
    };

    return (
        <form onSubmit={handleSubmit} >
            <h3>Регистарция</h3>
            <Input type="email" label="Email" placeholder="Введите сообщение" value={email} onChange={handleGetEmail} width="300px" />
            <Input type="text" label="Имя пользвателья" placeholder="Имя пользвателья" value={userName} onChange={handleGetUserName} width="300px" />
            <Input type="password" label="Password" placeholder="Введите пароль" value={password} onChange={handleGetPassword} width="300px" />
            <Link to="/login">У меня есть аккаунт, войти</Link>
            <div>
                <Button {...loginButtonProps}>Зарегистрироваться</Button>
            </div>

        </form>
    )
}

export default RegistrationForm