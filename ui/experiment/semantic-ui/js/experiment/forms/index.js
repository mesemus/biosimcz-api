import { DepositFormApp, parseFormAppConfig } from "@js/oarepo_ui/forms";
import { RDMCommunityAndAccess, RDMFiles } from "@js/oarepo_rdm/form/sections";
import React from "react";
import ReactDOM from "react-dom";
import { GeneralInformation } from "./generalinformation";
import { Files } from "./files"
import { SuggestionsProvider } from "@js/oarepo_orcha/deposit/";
import { ExperimentMetadata } from "./experiment";

const { rootEl, config, ...rest } = parseFormAppConfig();

// Experiment section - simply a concatenation of multiple sections into one
export const ExperimentSection = {
    key: "experiment",
    label: "Experiment",
    component: (input) => {
        return (
            <>
                {RDMCommunityAndAccess.component(input)}
                <br/>
                <hr/>
                <br/>
                {GeneralInformation.component(input)}
                <br/>
                <hr/>
                <br/>
                {Files.component(input)}
                <br/>
                <hr/>
                <br/>
                {ExperimentMetadata.component(input)}
            </>
        );
    },
    includesPaths: [
        ...RDMCommunityAndAccess.includesPaths,
        ...Files.includesPaths,
        ...GeneralInformation.includesPaths,
        ...ExperimentMetadata.includesPaths,
    ]
};

const sections = [
  ExperimentSection,
];

ReactDOM.render(
  <SuggestionsProvider>
    <DepositFormApp
      config={config}
      {...rest}
      sections={sections}
      useWizardForm
    />
  </SuggestionsProvider>,
  rootEl,
);
