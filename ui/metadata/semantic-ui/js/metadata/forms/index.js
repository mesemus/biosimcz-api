import {DepositFormApp, parseFormAppConfig} from "@js/oarepo_ui/forms";
import React from "react";
import ReactDOM from "react-dom";
import {EDTFSingleDatePicker} from "@js/oarepo_ui/forms";
import {parametrize} from "react-overridable";
import {UppyUploader} from "@js/invenio_rdm_records";
import {
    useFormConfig,
//  FormikStateLogger,
    CreatibutorsField,
    TextField,
} from "@js/oarepo_ui/forms";
import {GroupField} from "react-invenio-forms";
import {
    CCMMDepositRecordSerializer,
    CCMMSections,
} from "@js/ccmm_invenio/forms";
import {CCMMFiles} from "@js/ccmm_invenio/forms/CCMMFiles";
import {CCMMGeneralInformation} from "@js/ccmm_invenio/forms/CCMMGeneralInformation";
import {AdministrativeSection} from "./sections/Administrative";
import {CCMMCommunityAndAccess} from "@js/ccmm_invenio/forms/CCMMCommunityAndAccess";
import {AuxFiles} from "./sections/AuxFiles";
import {ExperimentsSection} from "./sections/Experiments";
import { SuggestionsProvider, OrchaFileUploader } from "@js/oarepo_orcha/deposit/";

const {rootEl, config, ...rest} = parseFormAppConfig();
const recordSerializer = new CCMMDepositRecordSerializer(
    config.default_locale,
    config.custom_fields.vocabularies,
);

const parametrizeEDTFSingleDatePicker = parametrize(EDTFSingleDatePicker, {
    customInputProps: {width: 16},
});

// From https://github.com/UFCHJH/czbi-c-bird_invenio_repository/blob/main/ui/datasets/semantic-ui/js/datasets/forms/index.js
const overridableIdPrefix = config.overridableIdPrefix;
export const componentOverrides = {
    //[`${overridableIdPrefix}.FormFields.container`]: FormFieldsContainer,
    // no clue bout this, was in the template
    "InvenioRdmRecords.DepositForm.DatesField.DateField":
    parametrizeEDTFSingleDatePicker,

    // Add "extract metadata" button to the uploader
    "Metadata.Form.Files": OrchaFileUploader,
};

export const mySections = [
    CCMMCommunityAndAccess,
    AdministrativeSection,
    ExperimentsSection,
    AuxFiles,
];

ReactDOM.render(
    <SuggestionsProvider>
            <DepositFormApp
            config={config}
            {...rest}
            sections={mySections}
            recordSerializer={recordSerializer}
            componentOverrides={componentOverrides}
            useWizardForm
        />
    </SuggestionsProvider>,
    rootEl,
);
