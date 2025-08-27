import TableRow from "./table-row";
import TableHeader from "./table-head";
import {Fragment} from "react";
import { featuresData } from "@/constants/pricingDataTable";
import CategoryHead from "./category-Head";

export default function PricingTable() {
    return (
        <div className="max-w-screen-2xl hidden lg:block w-full mx-auto padding-x bg-light mt-24">
            <div className="overflow-x-auto">
                <table className="w-full ">
                    <TableHeader />

                    <tbody>
                        {featuresData.map((section, sectionIndex) => (
                            <Fragment key={sectionIndex}>
                                <CategoryHead category={section.category} />
                                <TableRow rows={section.rows} />
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
