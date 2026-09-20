import { DepositFormApp, parseFormAppConfig } from "@js/oarepo_ui/forms";
import { RDMCommunityAndAccess, RDMFiles } from "@js/oarepo_rdm/form/sections";
import React from "react";
import ReactDOM from "react-dom";
import { GeneralInformation } from "./generalinformation";
import { Files } from "./files"
import { SuggestionsProvider } from "@js/oarepo_orcha/deposit/";


const { rootEl, config, ...rest } = parseFormAppConfig();

const sections = [
  RDMCommunityAndAccess,
  GeneralInformation,
  Files
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
