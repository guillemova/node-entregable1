
const getAllUsersTranfer = (req,res) => {
    const { id } = req.params
    const { name, accountNumber, password, amount, status } = req.body
    res.json={
        status:"success",
        messagge:"Method - GET-  was called by postman",
        user:{
            name,
            accountNumber,
            password,
            amount,
            status,
            id
        }

    }
}

const userNewAcount = (req, res) => {
    const { accountNumber, password } = req.body
    res.json = {
        status:"success",
        messagge:"Method POST - to create a user account",
        user:{
            accountNumber,
            password
        }
    }
}


const userLogin = (req, res) => {
    const { accountNumber, password } = req.body
    res.json = {
        status:"success",
        messagge:"Method POST- to login",
        user:{
            accountNumber,
            password
        }
    }
     }


module.exports = {
    getAllUsersTranfer,
     userNewAcount,
      userLogin
}