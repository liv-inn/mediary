import { FaStar } from "react-icons/fa";

export function UserCard({ title, status, imgUrl}){

    return(
        <div>
             <img src={imgUrl} alt={`Capa de ${title}`} />
            <p>{title}</p>
            <p>{status}</p>
            <FaStar className='input-icon' />
        </div>
    )
}