//  ServiceFactoryContext care este creat folosind funcția React.createContext().
//  Contextul este utilizat pentru a permite accesul la o instanță a unei interfețe denumită IServiceFactory în cadrul componentelor React din aplicație.
//  IServiceFactory este o interfață care definește o colecție de servicii sau un factor de fabrică pentru crearea serviciilor în aplicație. 
//  Acest lucru înseamnă că este necesar ca un provider superior să furnizeze o valoare validă pentru acest context înainte ca componentele consumatoare să îl utilizeze. 
//  De exemplu, în arborele componentelor React, o componenta superiora poate furniza o implementare a interfeței IServiceFactory ca valoare pentru acest context.
//  Componentele descendente care doresc să acceseze serviciile prin intermediul IServiceFactory pot folosi ServiceFactoryContext.
//  Consumer sau hook-urile specifice, precum useContext(ServiceFactoryContext), pentru a accesa și utiliza valorile furnizate în context.

import { IServiceFactory } from "./service-factory.interface";
import React from 'react';
export const ServiceFactoryContext = React.createContext<IServiceFactory>(null!);