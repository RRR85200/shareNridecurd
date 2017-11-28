export class PostRide{  
    
    constructor(  
        public origin?:string,
        public destination?:string,
        public userMobile?:any,
        public ridedate?:Date,
        public seats?:number,
        public user_id?:number,
        public user_type?:string,
        public rideId?:number,        
        public Drivername?:string,
        public RiderName?:string,
        public price?:number,
        public carNumber?:any,
        public carModel?:string

    ){}

}