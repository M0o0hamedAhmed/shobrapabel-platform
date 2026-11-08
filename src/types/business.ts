export type Business = {
    id: number;
    name: string;
    description: string;
}

export type NewBusiness =  Omit<Business, "id">;