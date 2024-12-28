import React from "react";
import * as icons from "@/components/Common/Icon/Icons.def";

const AllIcons = () => {
    return (
        <ul style={{ display: "flex", flexWrap: "wrap", gap: "40px", padding: "20px" }}>
            {Object.entries(icons).map(([iconName, IconComponent]) => (
                <li key={iconName} style={{ textAlign: "center" }}>
                    <IconComponent width={30} height={30} fill="none" />
                    <p style={{ marginTop: "8px", fontSize: "14px" }}>{iconName}</p>
                </li>
            ))}
        </ul>
    );
};

export default AllIcons;
