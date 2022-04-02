import { RouteProps } from "react-router-dom";

interface EndPointsProps extends RouteProps {
    name?: string;
}

export const endpoints: EndPointsProps[] = [];