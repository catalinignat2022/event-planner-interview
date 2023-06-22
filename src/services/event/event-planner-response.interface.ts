export interface IEvent {
    id: string;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    image: string;
    categories: string[];
    subscribe: number;
}