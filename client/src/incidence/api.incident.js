const create = async (incident) => {

    try {

        let response = await fetch('http://localhost:3200/api/incidents/', {

            method: 'POST',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json'

            },

            body: JSON.stringify(incident)

        })

        return await response.json()

    } catch (err) {

        console.log(err)

    }

}



const list = async (signal,query) => {

    try {

        let response = await fetch(`http://localhost:3200/api/incidents?email=${query}`, {

            method: 'GET',

            signal: signal,

        })

        return await response.json()

    } catch (err) {

        console.log(err)

    }

}



const read = async (params, credentials, signal) => {

    try {

        let response = await fetch('/api/incident/' + params.incidentId, {

            method: 'GET',

            signal: signal,

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json',

                'Authorization': 'Bearer ' + credentials.t

            }

        })

        return await response.json()

    } catch (err) {

        console.log(err)

    }

}



const update = async (params, credentials, user) => {

    try {

        let response = await fetch('/api/incident/' + params.userId, {

            method: 'PUT',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json',

                'Authorization': 'Bearer ' + credentials.t

            },

            body: JSON.stringify(user)

        })

        return await response.json()

    } catch (err) {

        console.log(err)

    }

}



const remove = async (params, credentials) => {

    try {

        let response = await fetch('/api/incident/' + params.userId, {

            method: 'DELETE',

            headers: {

                'Accept': 'application/json',

                'Content-Type': 'application/json',

                'Authorization': 'Bearer ' + credentials.t

            }

        })

        return await response.json()

    } catch (err) {

        console.log(err)

    }

}



export {

    create,

    list,

    read,

    update,

    remove

}

