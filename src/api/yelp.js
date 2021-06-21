import axios from 'axios'
import { KEY } from '@env'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        //Authorization: 'Bearer cK1Zb4r6Ijr5Z-KuNjQ-tMsT-4HoIByqeE8BTtyp64vMDCR6n7-CCpRY5Pc7_I9CcIKzRDR4_8gwdQx4Y-SUtPAdWYr5uhc0Gt60OufuqMaoZltf877GAS-_GKzQYHYx'
        Authorization: 'Bearer ' + KEY
    }
})

// SPTM → EL ASI ESPERA QUE AUTHORIZATION VAYA EN CAPITAL LETTER