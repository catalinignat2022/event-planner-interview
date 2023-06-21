export interface INodeData {
    id: string;
    name: string;
    type: string;
    createdAt: string;
    createdUnix: string;
    unclaimedEventPlanner: string;
    key: string;
    index: number;
    contor: number;
}

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