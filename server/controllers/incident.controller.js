import Incident from '../models/incident.model'

import extend from 'lodash/extend'

import errorHandler from './../helpers/dbErrorHandler'



const create = async (req, res) => {

    const incident = new Incident(req.body)
  
    try {

        await incident.save()

        return res.status(200).json({

            message: "Incident Reported Successfully"

        })

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }

}



/**

 * Load incident and append to req.

 */

const incidentByID = async (req, res, next, id) => {
    
    try {
        
        let incident = await Incident.findById(id)

        if (!incident)

            return res.status('400').json({

                error: "Incident not available"

            })

        req.profile = incident

        next()

    } catch (err) {

        return res.status('400').json({

            error: "Could not retrieve Incident"

        })

    }

}


const read = (req, res) => {

    
    return res.json(req.profile)

}



const list = async (req, res) => {
const query= req.query;
    try {
        
        let incident = await Incident.find(query).select('user incident dept resolution issue timeReported role cause status')
         
           const numOpen= (incident.filter(inci=>inci.status==='Open')).length;
          const numClosed= (incident.filter(inci=>inci.status==='Closed')).length;
          const data={
              incident:incident,
              numClosed:numClosed,
              numOpen:numOpen
          }
         
        res.json(data)

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }

}



const update = async (req, res) => {

    try {

        let incident = req.profile

        incident = extend(incident, req.body)

        

        await incident.save()

        incident.timeReported = undefined

        res.json(incident)

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }

}



const remove = async (req, res) => {

    try {

        let incident = req.profile

        let deletedIncident = await incident.remove()

        res.json(deletedIncident)

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }

}



export default {

    create,

    incidentByID,

    read,

    list,

    remove,

    update

}