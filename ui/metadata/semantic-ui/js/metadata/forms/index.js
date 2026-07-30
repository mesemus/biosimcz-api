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
import { GroupField } from "react-invenio-forms";

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
      {/*<GroupField fieldPath="metadata.administrative.software_information">*/}
        <TextField fieldRepresentation="text" fieldPath="metadata.administrative.software_information.software" />
        <TextField fieldRepresentation="text" fieldPath="metadata.administrative.software_information.version" />
      {/*</GroupField>*/}

      <XYZ fieldPath="metadata.system.box_dimensions"></XYZ>
    </React.Fragment>
    );
  },
  includesPaths: ["metadata.administrative.software_information", "metadata.system.box_dimensions"],
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

