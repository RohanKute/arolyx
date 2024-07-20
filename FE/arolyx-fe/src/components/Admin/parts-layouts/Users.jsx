import { useEffect, useState } from "react";
import TableHeadersUsers from "./TableHeaderUsers";
import { axiosInstanceAdmin } from "../../../utils/axiosInstanceAdmin";
import { useAdminPopup } from "../../../context/admin-context/adminPopupContext";
import SingleUser from "./SingleUser";

export default function Users() {
    const [users, setUsers] = useState();
    const { setAdminPopup } = useAdminPopup();
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axiosInstanceAdmin.get('/see-users');
                console.log(response.data)
                if (response) {
                    setUsers(response.data);
                }
            } catch (error) {
                setAdminPopup({
                    text: "Error while fetching users",
                    message: 'fail'
                })
            }
        }
        getUsers();
    }, [])

    return (
        <>
           <div>
           <TableHeadersUsers />
            {users?.map((user, index) => (
                 <SingleUser key={user.id} index={index} user={user} />
            ))}
           </div>
        </>
    )
}