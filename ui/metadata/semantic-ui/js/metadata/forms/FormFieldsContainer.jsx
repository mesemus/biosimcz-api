import * as React from "react";

import {
  useFormConfig,
//  FormikStateLogger,
  CreatibutorsField,
  TextField,
} from "@js/oarepo_ui/forms";
import { AccordionField } from "react-invenio-forms";
import { i18next } from "@translations/i18next";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const FormFieldsContainerComponent = ({ record }) => {
  const formConfig = useFormConfig();
  const { filesLocked } = formConfig;

  return (
    <React.Fragment>
      <TextField fieldPath="metadata.collection_date" />

	  {/*
      <AccordionField
        includesPaths={["metadata.title"]}
        active
        label={i18next.t("Basic information")}
      >
        <TextField fieldPath="metadata.title" />
      </AccordionField>
      <AccordionField
        includesPaths={["files.enabled"]}
        active
        label={
          <label htmlFor="files.enabled">{i18next.t("Files upload")}</label>
        }
        data-testid="filesupload-button"
      >
        <UppyUploader
          isDraftRecord={!record.is_published}
          config={formConfig}
          quota={formConfig.quota}
          decimalSizeDisplay={formConfig.decimal_size_display}
          allowEmptyFiles={formConfig.allow_empty_files}
          fileUploadConcurrency={formConfig.file_upload_concurrency}
          showMetadataOnlyToggle={false}
          filesLocked={filesLocked}
        />
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.specimen"]}
        active
        label={i18next.t("Specimen")}
      >
        <Specimen fieldPath="metadata.specimen"></Specimen>
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.sample_preparation"]}
        active
        label={i18next.t("Sample preparation")}
      >
        <SamplePreparation fieldPath="metadata.sample_preparation"></SamplePreparation>
      </AccordionField>

      <AccordionField
        includesPaths={["metadata.image_acquisition"]}
        active
        label={i18next.t("Image acquisition")}
      >
        <ImageAcquisition fieldPath="metadata.image_acquisition"></ImageAcquisition>
      </AccordionField>
      {process.env.NODE_ENV === "development" && <FormikStateLogger />}
*/}

    </React.Fragment>
  );
};

FormFieldsContainerComponent.propTypes = {
  record: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    record: state.deposit.record,
  };
};



const FormFieldsContainerComponent = ({ record }) => {
  const formConfig = useFormConfig();
  const { filesLocked } = formConfig;

  return (
      <React.Fragment>
        <TextField fieldPath="metadata.collection_date" />
      </React.Fragment>
  );
};


export default connect(mapStateToProps)(FormFieldsContainerComponent);

