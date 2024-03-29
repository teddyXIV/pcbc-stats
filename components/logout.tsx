import axios from "axios"
import router from "next/router";

const Logout = () => {
    const logout = async () => {
        try {
            await axios.get('api/users/logout');
            router.push('/login')
        } catch (error: any) {
            console.log(error.message)
        }
    }

    return (
        <button onClick={logout}>Logout</button>
    )
}

export default Logout;