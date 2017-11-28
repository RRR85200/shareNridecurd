export class RidesHistory{
    
        constructor(  
            public ride_driver_name?:string,
            public ride_rider_name?:string,
            public rider_id?:number,
            public driver_id?:number,
            public origin?:string,
            public destination?:string,
            public ridetime?:Date,
            public ride_id?:number,
            public rideendtime?:Date,
            public price?:any,
            public carNumber?:string,
            public carModel?:string,
            public seats?:string
            
    
        ){}
    
    }