import React from "react";
import {CCMMGeneralInformation} from "@js/ccmm_invenio/forms/CCMMGeneralInformation";
import {CCMMFunding} from "@js/ccmm_invenio/forms/CCMMFunding";
import {CCMMAlternativeIdentifiers} from "@js/ccmm_invenio/forms/CCMMAlternativeIdentifiers";
import {CCMMRelatedWorks} from "@js/ccmm_invenio/forms/CCMMRelatedWorks";
import {CCMMCommunityAndAccess} from "@js/ccmm_invenio/forms/CCMMCommunityAndAccess";

// Administrative section - simply a concatenation of all CCMM sections into one
export const AdministrativeSection = {
    key: "administrative",
    label: "Administrative",
    component: (input) => {
        return (
            <>
                {CCMMGeneralInformation.component(input)}
                {CCMMFunding.component(input)}
                {CCMMAlternativeIdentifiers.component(input)}
                {CCMMRelatedWorks.component(input)}
                {/*{CCMMCommunityAndAccess.component(input)}*/}
            </>
        );
    },
    includesPaths: [
        ...CCMMGeneralInformation.includesPaths,
        ...CCMMFunding.includesPaths,
        ...CCMMAlternativeIdentifiers.includesPaths,
        ...CCMMRelatedWorks.includesPaths,
        // ...CCMMCommunityAndAccess.includesPaths,
    ]
};
