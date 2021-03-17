import Request from '../models/request.model'

import extend from 'lodash/extend'

import errorHandler from './../helpers/dbErrorHandler'



const create = async (req, res) => 
{
    const request = new Request(req.body)
  
    try {

        await request.save()

        return res.status(200).json({

            message: "Request Reported Successfully"

        })

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }

}



/**

 * Load request and append to req.

 */

const requestByID = async (req, res, next, id) => {
    
    try {
        
        let request = await request.findById(id)

        if (!request)

            return res.status('400').json({

                error: "request not available"

            })

        req.profile = request

        next()

    } catch (err) {

        return res.status('400').json({

            error: "Could not retrieve request"

        })

    }

}


const read = (req, res) => {

    
    return res.json(req.profile)

}



const list = async (req, res) => {
const query= req.query;

    try {
        
        if(query.role==='User')
        {
           
        let request = await request.find({email:query.email}).select('user request dept resolution issue timeReported role cause status')
         
           const numOpen= (request.filter(inci=>inci.status==='Open')).length;
          const numClosed= (request.filter(inci=>inci.status==='Closed')).length;
          const data={
              request:request,
              numClosed:numClosed,
              numOpen:numOpen
          }
          
        res.json(data)
    }

    else if(query.role==='Admin'){

        let request = await request.find().select('user request dept resolution issue timeReported role cause status')
         
        const numOpen= (request.filter(inci=>inci.status==='Open')).length;
       const numClosed= (request.filter(inci=>inci.status==='Closed')).length;
       const data={
           request:request,
           numClosed:numClosed,
           numOpen:numOpen
       }
      
     res.json(data)

    }

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }
}



const update = async (req, res) => {

    try {

        let request = req.profile

        request = extend(request, req.body)

        

        await request.save()

        request.timeReported = undefined

        res.json(request)

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }

}



const remove = async (req, res) => {

    try {

        let request = req.profile

        let deletedRequest = await request.remove()

        res.json(deletedRequest)

    } catch (err) {

        return res.status(400).json({

            error: errorHandler.getErrorMessage(err)

        })

    }

}



export default {

    create,

    requestByID,

    read,

    list,

    remove,

    update

}