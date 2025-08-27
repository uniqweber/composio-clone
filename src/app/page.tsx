import Hero from "@/components/home/hero/hero";
import AgentsLogoCloud from "@/components/home/agents/agent-logo-cloud";
import MuscleMemory from "@/components/home/memory/muscle-memory";
import AppsAccordion from "@/components/home/accordion/apps-accordion";
import CaseStudies from "@/components/home/cases/case-studies";
import BuiltForAgents from "@/components/home/built/built-for-agents";
import Tweets from "@/components/home/tweets/tweets";
import Benefits from "@/components/home/benefits/benefits";
import PriceCompare from "@/components/home/compare/price-compare";
import Intelligence from "@/components/home/intelligence/intelligence";


export default function Home() {
    return (
        <>
            <Hero />
            <AgentsLogoCloud />
            <MuscleMemory />
            <AppsAccordion />
            <CaseStudies />
            <BuiltForAgents />
            <Tweets />
            <Benefits />
            <PriceCompare />
            <Intelligence />
        </>
    );
}
