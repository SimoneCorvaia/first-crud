import {Request,Response} from "express";
import  users  from "../data/user.data";
import {v4 as uuidv4} from "uuid";
import{User}from "../types/user.type"
/*export const getUsers = (req: Request, res: Response) => {
res.status(200).json(users);    
};*/
export const getUsers = async(req: Request, res: Response) => {
    try{
        const queryParams = req.query;

        let filteredUsers: User[] = [];

        if (queryParams.name) {
            const searchTerm = queryParams.name.toString().toLowerCase();
            filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchTerm));
        }

        if (queryParams.email) {
            const searchTerm = queryParams.email.toString().toLowerCase();
            filteredUsers = users.filter(user => user.email.toLowerCase().includes(searchTerm));
        }

        if (filteredUsers.length === 0) filteredUsers = users;

        res.status(200).json(filteredUsers);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
}






















export const getUserById = (req: Request, res: Response) => {
    const id = req.params.id;
    const usersFound = users.find(user => user.id === id)
if (usersFound){
res.status(200).json(usersFound)}   
else {
    res.status(400).json({message:"user not found"});

}
}
export const addUserHandler= (req: Request, res: Response) => {
    const user: User = req.body;
    users.push({...user, id: uuidv4()});
    res.status(200).json(users)
    

}
export const deleteUserHandler = (req: Request, res: Response) => {
    const id = req.params.id;
    const indexUserFound = users.findIndex(user => user.id === id);
    if (indexUserFound!==-1) {
        res.status(200).json({
            message:"user deleted",
            user: users[indexUserFound]
        });
        users.splice(indexUserFound,1);
    }
    else {
        res.status(400).json({ message: "user not found" });
        throw new Error("user not found")
    }
}

export const updateUserHandler = async (req: Request, res: Response) => {
    const indexUserFound = users.findIndex((user) => user.id === req.params.id);
    if (indexUserFound !== -1) {
        const user = users[indexUserFound]
        Object.assign(user, req.body);
        res.status(200).json({
            user: users[indexUserFound],
            message: 'user successfully updated',
        });
    } else {
        res.status(404).json({ message: 'user by id not found' });
    }
};