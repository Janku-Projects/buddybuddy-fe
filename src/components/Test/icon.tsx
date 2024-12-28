import React from "react";
import * as icons from "@/components/Common/Icon/Icons.def";

const AllIcons = () => {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: "20px" }}>
            {Object.entries(icons).map(([iconName, IconComponent]) => (
                <div key={iconName} style={{ textAlign: "center" }}>
                    <IconComponent width={50} height={50} fill="none" />
                    <p style={{ marginTop: "8px", fontSize: "14px" }}>{iconName}</p>
                </div>
            ))}
        </div>
    );
};

export default AllIcons;
