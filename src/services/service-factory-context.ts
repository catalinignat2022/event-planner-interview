import { IServiceFactory } from "./service-factory.interface";
import React from 'react';
export const ServiceFactoryContext = React.createContext<IServiceFactory>(null!);