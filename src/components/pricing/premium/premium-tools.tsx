import React from "react";
import ToolCalls from "./tool-calls";
import EnterprisePricing from "./enterprise-pricing";
import RateLimits from "./rate-limits";

export default function PremiumTools() {
    return (
        <div className="max-w-screen-2xl mx-auto padding-x space-y-4 lg:mt-44 mt-16">
            <ToolCalls />
            <EnterprisePricing />
            <RateLimits />
        </div>
    );
}
