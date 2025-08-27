import CTA from "@/components/pricing/cta";
import PremiumTools from "@/components/pricing/premium/premium-tools";
import Prices from "@/components/pricing/prices/prices";
import Rewards from "@/components/pricing/rewards/rewards";
import PricingTable from "@/components/pricing/table/pricing-table";

export default function Pricing() {
    return (
        <>
            <Prices />
            <PricingTable />
            <CTA/>
            <PremiumTools />
            <Rewards />
        </>
    );
}
