import { SearchBar } from "../components/SearchBar"
import { UserCard } from "../components/UserCard"
export function UserPage(){

    return(
        <div>
            <h2>Olá !</h2>
            <SearchBar />
            <UserCard title="Books" status="Finished" />
            
        </div>
    )
}