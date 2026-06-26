import { DepositFormApp, parseFormAppConfig } from "@js/oarepo_ui/forms";
import React from "react";
import ReactDOM from "react-dom";
import { EDTFSingleDatePicker } from "@js/oarepo_ui/forms";
import { parametrize } from "react-overridable";
import {
  CCMMDepositRecordSerializer,
  CCMMSections,
} from "@js/ccmm_invenio/forms";
//import FormFieldsContainer from "./FormFieldsContainer";
import XYZ from "./Primitives"
import { UppyUploader } from "@js/invenio_rdm_records";
import {
  useFormConfig,
//  FormikStateLogger,
  CreatibutorsField,
  TextField,
} from "@js/oarepo_ui/forms";

const { rootEl, config, ...rest } = parseFormAppConfig();
const recordSerializer = new CCMMDepositRecordSerializer(
  config.default_locale,
  config.custom_fields.vocabularies,
);

const parametrizeEDTFSingleDatePicker = parametrize(EDTFSingleDatePicker, {
  customInputProps: { width: 16 },
});

// From https://github.com/UFCHJH/czbi-c-bird_invenio_repository/blob/main/ui/datasets/semantic-ui/js/datasets/forms/index.js
const overridableIdPrefix = config.overridableIdPrefix;
export const componentOverrides = {
  //[`${overridableIdPrefix}.FormFields.container`]: FormFieldsContainer,
  // no clue bout this, was in the template
  "InvenioRdmRecords.DepositForm.DatesField.DateField":
    parametrizeEDTFSingleDatePicker,
};

export const NewSection = {
  key: "aaaAAAA",
  label: "Example",
  component: ({ record, formConfig }) => {
    //const { filesLocked } = formConfig.config;
    return (
    <React.Fragment>
      <TextField fieldPath="metadata.collection_date" />
        <XYZ fieldPath="metadata.system.box_size_and_shape"></XYZ>
    </React.Fragment>
    );
  },
  includesPaths: ["metadata.collection_date"],
};

export const mySections = [...CCMMSections, NewSection];

ReactDOM.render(
  <DepositFormApp
    config={config}
    {...rest}
    sections={mySections}
    recordSerializer={recordSerializer}
    componentOverrides={componentOverrides}
    useWizardForm
  />,
  rootEl,
);

