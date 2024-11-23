export interface linkData {
    linkUrl:string;
    linkName:string;
    linkClass:string;
    isOpen?:() => void; 
}

export interface FormData {
    nombre: string;
    email: string;
    telefono: string;
}