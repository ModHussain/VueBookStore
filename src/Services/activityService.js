import { ReplaySubject } from 'rxjs';

const activity = new ReplaySubject();
var DataValue;

const activityService = {
    setActivity: function setActivity(data) {
        activity.next(data)
    },
    clearActivity: function clearActivity(){
        activity.next();
    },

    getActivity: function getActivity (){
       return activity.asObservable();
    } ,
    setAction: function setAction(data){
        DataValue = data;
    },
    getAction:function getAction(){
        return DataValue;
    }
};

export default activityService;