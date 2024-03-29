const signin = async (user) => {

    try {

        let response = await fetch('http://localhost:3200/auth/signin', {

            method: 'POST',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },
            
            

            body: JSON.stringify(user)

        })
       
        return await response.json()

    } catch (err) {

        console.log(err)
        return({error:"OPPS! something's wrong, check your network or contact Admin"})

    }

}



const signout = async () => {

    try {

        let response = await fetch('/auth/signout/', { method: 'GET' })

        return await response.json()

    } catch (err) {

        console.log(err)

    }

}

const createUser = async (user) => {
    
    try {

        let response = await fetch('https://gppissuetracker-backend.herokuapp.com/api/users/', {

            method: 'POST',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify(user)

        })

        return await response.json()

    } catch (err) {

        console.log(err)

    }

}

export {

    signin,

    signout

}