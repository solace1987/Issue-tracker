import express from 'express'
import requestCtrl from '../controllers/request.controller'
import authCtrl from '../controllers/auth.controller'


const router = express.Router()

router.route('/api/incidents')
    .get(requestCtrl.list)
    .post(requestCtrl.create)


router.route('/api/incidents/:incidentId')

    .get(authCtrl.requireSignin, requestCtrl.read)

    .put(authCtrl.requireSignin, requestCtrl.update)

    .delete(authCtrl.requireSignin, requestCtrl.remove)



router.param('requestId', requestCtrl.requestByID)



export default router