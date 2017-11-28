export class Coupon{
    
        constructor(  
            public coupon_code?:number,
            public coupon_type?:number,
            public coupon_validity?:Date,
            public user_id?:number,           
            public coupon_rides?:number,
            public coupon_price?:number,
            public coupon_seq?:number,
            
    
        ){}
    
    }