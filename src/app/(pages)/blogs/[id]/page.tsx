import Article from "@/components/details/article";
import DetailsHead from "@/components/details/details-head";
import Recommended from "@/components/details/recommended";
import TryCTA from "@/components/details/try-CTA";
import React from "react";

export default function BlogDetails() {
    return (
        <>
            <DetailsHead />
            <Article />
            <TryCTA />
            <Recommended />
        </>
    );
}
