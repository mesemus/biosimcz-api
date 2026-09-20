import React from "react";
import { buildUID } from "react-searchkit";
import Overridable from "react-overridable";
import { i18next } from "@translations/oarepo_rdm";
import { EDTFSingleDatePicker, CreatibutorsField } from "@js/oarepo_ui/forms";
import { TitlesField, DescriptionsField } from "@js/invenio_rdm_records";
import { PIDFieldList } from "@js/oarepo_rdm/form/components";

export const GeneralInformation = {
  key: "general-information",
  label: i18next.t("General information"),
  component: (tabConfig) => {
    const { record, formConfig } = tabConfig;
    const { vocabularies, pids, is_doi_required } = formConfig.config;
    const { overridableIdPrefix } = formConfig;
    return (
      <>
        <Overridable
          id={buildUID(overridableIdPrefix, "PIDField")}
          {...tabConfig}
        >
          <PIDFieldList
            pids={pids}
            record={record}
            isDoiRequired={is_doi_required}
          />
        </Overridable>
        <Overridable
          id={buildUID(overridableIdPrefix, "Title")}
          {...tabConfig}
        >
          <TitlesField
            options={vocabularies?.titles}
            fieldPath="metadata.title"
            recordUI={record.ui}
            required
          />
        </Overridable>
        <Overridable
          id={buildUID(overridableIdPrefix, "Description")}
          {...tabConfig}
        >
          <DescriptionsField
            fieldPath="metadata.description"
            options={vocabularies?.descriptions}
            recordUI={record.ui}
          />
        </Overridable>
        <Overridable
          id={buildUID(overridableIdPrefix, "PublicationDate")}
          {...tabConfig}
        >
          <EDTFSingleDatePicker fieldPath="metadata.publication_date" required={false} />
        </Overridable>
        <Overridable
          id={buildUID(overridableIdPrefix, "Creators")}
          {...tabConfig}
        >
          <CreatibutorsField
            fieldPath="metadata.creators"
            schema="creators"
            autocompleteNames="search"
            required={false}
          />
        </Overridable>
      </>
    );
  },
  includesPaths: [
    "pids",
    "metadata.publication_date",
    "metadata.title",
    "metadata.creators",
  ],
};
