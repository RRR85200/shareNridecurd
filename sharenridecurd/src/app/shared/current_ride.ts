export class CurrentRides{

    constructor(  
        public ride_driver_name?:string,
        public ride_rider_name?:string,
        public rider_id?:number,
        public driver_id?:number,
        public origin?:string,
        public destination?:string,
        public ridetime?:Date,
        public ride_id?:number,
        public seats?:number,
        public price?:number,
        public carNumber?:string,
        public carModel?:string


    ){}

}