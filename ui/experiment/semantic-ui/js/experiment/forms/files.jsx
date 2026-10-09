import React, { Fragment } from "react";
import { buildUID } from "react-searchkit";
import Overridable from "react-overridable";
import { i18next } from "@translations/ccmm_invenio";
import { UppyUploader } from "@js/invenio_rdm_records";
import { computeFilesSectionCompletion } from "@js/oarepo_ui/forms";
import { SuggestionProvenance, SuggestionsButton } from "@js/oarepo_orcha/deposit";

export const Files = {
    key: "files",
    label: i18next.t("Auxiliary files"),
    lockTabChange: (formik, reduxState) => {
        const entries = Object.values(reduxState?.files?.entries ?? {});
        return entries.some((file) => file.status === "uploading");
    },
    component: (tabConfig) => {
        const { record, formConfig } = tabConfig;
        const { filesLocked, permissions, overridableIdPrefix, fileModification } = formConfig.config;
        return (
            <Fragment>
                <Overridable id={buildUID(overridableIdPrefix, "Files")} {...tabConfig}>
                    <UppyUploader
                        isDraftRecord={!record.is_published}
                        config={formConfig}
                        quota={formConfig?.config?.quota}
                        decimalSizeDisplay={formConfig.decimal_size_display}
                        allowEmptyFiles={formConfig.allow_empty_files}
                        fileUploadConcurrency={formConfig.file_upload_concurrency}
                        showMetadataOnlyToggle={permissions?.can_manage_files}
                        filesLocked={filesLocked}
                        fileModification={fileModification}
                    />

                </Overridable>
                <Overridable id={buildUID(overridableIdPrefix, "SuggestionButton")} record={record}>
                    <div style={{marginTop: 32 + 'px'}}>
                        <SuggestionsButton record={record} inline />
                    </div>
                </Overridable>
                <SuggestionProvenance></SuggestionProvenance>
            </Fragment>
        );
    },
    sectionCompletion: computeFilesSectionCompletion,
    includesPaths: ["files.enabled"],
};
