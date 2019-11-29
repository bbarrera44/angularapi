export class DataVehicle{
    data: Vehicle[];
    success: boolean;
}

export class Vehicle{
    id: number;
    plate: string;
    parking: Parking[]; 
}

export class Parking{   

    name_parking: String;
    address: String;
    phone: Number;  
    email: string;
}
