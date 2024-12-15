import log_service from './../service/logService.js';

const id_verify = async (id) => {
    if(log_service.id_verify(id)==true){
        return true;
    };
    return false;
};


export default {
    id_verify
};
