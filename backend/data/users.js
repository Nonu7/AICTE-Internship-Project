import bcrypt from 'bcryptjs'
const Users = [
    {
        name : 'Divyanshi Bhatia',
        email : 'divyanshibhatia@gmail.com',
        password : bcrypt.hashSync('divyanshi2020',12),
        isAdmin : true
    },
    
]
export default Users