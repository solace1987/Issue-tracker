import express from 'express'
import incidentCtrl from '../controllers/incident.controller'
import authCtrl from '../controllers/auth.controller'


const router = express.Router()

router.route('/api/incidents')
    .get(incidentCtrl.list)
    .post(incidentCtrl.create)


router.route('/api/incidents/:incidentId')

    .get(authCtrl.requireSignin, incidentCtrl.read)

    .put(authCtrl.requireSignin, incidentCtrl.update)

    .delete(authCtrl.requireSignin, incidentCtrl.remove)



router.param('incidentId', incidentCtrl.incidentByID)



export default router