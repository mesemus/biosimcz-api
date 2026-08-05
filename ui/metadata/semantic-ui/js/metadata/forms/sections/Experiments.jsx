import React from "react";
import {AccordionField} from "react-invenio-forms";
import {buildUID} from "react-searchkit";
import Overridable from "react-overridable";
import {UppyUploader} from "@js/invenio_rdm_records";
import {ArrayField} from "react-invenio-forms";
import {Experiment} from "../primitives/Experiment";
import {ArrayFieldItem} from "@js/oarepo_ui/forms";

export const ExperimentsSection = {
    key: "files",
    label: "Study",
    component: (tabConfig) => {
        const {record, formConfig} = tabConfig;
        const {filesLocked, permissions} = formConfig.config;
        const {overridableIdPrefix} = formConfig;
        const fieldPath = "metadata.experiments";
        return (
            <React.Fragment>
                <p>Note: Experiments not in an array yet due to incomplete metadata schema.</p>

                <ArrayField
                    fieldPath={fieldPath}
                    addButtonLabel="Add experiment"
                >
                    {({arrayHelpers, indexPath}) => (
                        <AccordionField
                            fieldPath={`${fieldPath}.${indexPath}`}
                            label={`Experiment ${indexPath + 1}`}
                            active={true}
                            includesPaths={[`${fieldPath}`]}
                        >
                            {/* TODO: Would be nice to have a Segment or a AccordionChild component that doesn't have
                                       three paragraphs worth of margin between its child.*/}
                            <div class="ui segment">
                                <Experiment
                                    fieldPath={`${fieldPath}.${indexPath}`}
                                />
                            </div>
                            {/*</ArrayFieldItem>*/}
                        </AccordionField>
                    )}
                </ArrayField>
            </React.Fragment>
        );
    },
    includesPaths: [],
};
