import { FaStar } from "react-icons/fa";

export function UserCard({ title, status}){

    return(
        <div>
            <p>{title}</p>
            <p>{status}</p>
            <FaStar className='input-icon' />
        </div>
    )
}