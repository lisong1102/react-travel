import React from "react";
import { useParams } from "react-router-dom";

export const DetailPage: React.FC<any> = (props) => {
    const { touristRouteId } = useParams<{touristRouteId:string}>();
    return <h1>路游路线详情页面, 路线123ID:{touristRouteId}</h1>;
};
