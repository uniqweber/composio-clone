import BuiltHead from "./built-head";
import FeatureCarousel from "./built-carousel";
import CodeBlock from "./code-block";

export default function BuiltForAgents() {
    return (
        <div className="padding-x max-w-screen-2xl mx-auto my-32 xl:my-60">
            <BuiltHead />
            <div className="grid lg:grid-cols-2 items-center gap-10 xl:gap-20 mt-20 xl:mt-32">
                <FeatureCarousel />
                <CodeBlock/>
            </div>
        </div>
    );
}
