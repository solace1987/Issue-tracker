import server from '../helper/config'
const create = async (incident) => {

    try {

        let response = await fetch(`${server.name}/api/incidents/`, {

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



const list = async (signal, email, role, reqType,endDate,startDate) => {

    console.log(`${signal}---${email}---${role}`)
    let reqAddress = () => {
        if (reqType === "incident") {
            return `${server.name}/api/incidents?email=${email}&role=${role}&endDate=${endDate}&startDate=${startDate}`
        }
        else if (reqType === "request") {
            return null;
        }
    }
        
        try {
            let address=reqAddress()
            let response = await fetch(address, {

                method: 'GET',

                signal: signal,

            })

            return await response.json()

        } catch (err) {

            console.log(err)

        }

    }

    const verify = async () => {

    }

    const read = async (params, credentials, signal) => {
console.log(params)
        try {

            let response = await fetch(`${server.name}/api/incidents/` + params.incidentId, {

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



    const update = async (params, credentials, incident) => {

        try {

            let response = await fetch(`${server.name}/api/incidents/` + params.incidentId, {

                method: 'PUT',

                headers: {

                    'Accept': 'application/json',

                    'Content-Type': 'application/json',

                    'Authorization': 'Bearer ' + credentials.t

                },

                body: JSON.stringify(incident)

            })

            return await response.json()

        } catch (err) {

            console.log(err)

        }

    }



    const remove = async (params, credentials) => {

        try {

            let response = await fetch(`${server.name}/api/incident/` + params.userId, {

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

