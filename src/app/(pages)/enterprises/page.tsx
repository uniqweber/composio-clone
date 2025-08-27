import Automate from "@/components/enterprises/automate";
import Features from "@/components/enterprises/features/features";
import LogoCloud from "@/components/enterprises/logo-cloud";
import Scalable from "@/components/enterprises/scalable";
import SecurityBenefits from "@/components/enterprises/security/security-benefits";
import React from "react";

export default function Enterprises() {
    return (
        <>
            <Scalable />
            <LogoCloud />
            <SecurityBenefits />
            <Features />
            <Automate />
        </>
    );
}
