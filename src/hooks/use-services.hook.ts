import { useContext } from "react";
import { ServiceFactoryContext } from "../services/service-factory-context";

export function useServices() {
    return useContext(ServiceFactoryContext);
}