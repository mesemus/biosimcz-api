import React from "react";
import {TextField} from "@js/oarepo_ui/forms";
import { useFormConfig } from "@js/oarepo_ui/forms";
import {VocabularyField} from "@js/oarepo_vocabularies";

export const Experiment = ({fieldPath, ...rest}) => {
    const { formConfig } = useFormConfig();
    return (
        <React.Fragment>
            <TextField
                fieldPath={`${fieldPath}.name`}
            />

            <TextField
                fieldPath={`${fieldPath}.description`}
            />

            {/* Simulation Setup */}
            <VocabularyField
                fieldPath={`${fieldPath}.metadata.simulation_setup.software`}
                vocabularyName="software"
            />

            <TextField
                fieldPath={`${fieldPath}.metadata.simulation_setup.software_version`}
            />

            <VocabularyField
                fieldPath={`${fieldPath}.metadata.simulation_setup.force_field`}
                vocabularyName="force_field"
            />

            <VocabularyField
                fieldPath={`${fieldPath}.metadata.simulation_setup.water_model`}
                vocabularyName="water_model"
            />

            <VocabularyField
                fieldPath={`${fieldPath}.metadata.simulation_setup.integrator`}
                vocabularyName="integrator"
            />

            {/*/!* Thermodynamic State *!/*/}
            <VocabularyField
                fieldPath={`${fieldPath}.metadata.thermodynamic_state.ensemble`}
                vocabularyName="ensemble"
            />

            {/*<NumberField*/}
            {/*    fieldPath={`${fieldPath}.metadata.thermodynamic_state.reference_temperature`}*/}
            {/*    min={0}*/}
            {/*/>*/}

            {/*<NumberField*/}
            {/*    fieldPath={`${fieldPath}.metadata.thermodynamic_state.reference_pressure`}*/}
            {/*    min={0}*/}
            {/*/>*/}

            <VocabularyField
                fieldPath={`${fieldPath}.metadata.thermodynamic_state.thermostat`}
                vocabularyName="thermostat"
            />

            <VocabularyField
                fieldPath={`${fieldPath}.metadata.thermodynamic_state.barostat`}
                vocabularyName="barostat"
            />

            {/*/!* Temporal Extent *!/*/}
            {/*<NumberField*/}
            {/*    fieldPath={`${fieldPath}.metadata.temporal_extent.simulation_length`}*/}
            {/*    minExclusive={true}*/}
            {/*    minValue={0}*/}
            {/*/>*/}

            {/*<NumberField*/}
            {/*    fieldPath={`${fieldPath}.metadata.temporal_extent.timestep`}*/}
            {/*    minExclusive={true}*/}
            {/*    minValue={0}*/}
            {/*/>*/}

            {/*<NumberField*/}
            {/*    fieldPath={`${fieldPath}.metadata.temporal_extent.number_of_steps`}*/}
            {/*    minExclusive={true}*/}
            {/*    minValue={0}*/}
            {/*    fieldType="long"*/}
            {/*/>*/}

            {/*/!* System *!/*/}
            {/*<NumberField*/}
            {/*    fieldPath={`${fieldPath}.metadata.system.total_atoms`}*/}
            {/*    minExclusive={true}*/}
            {/*    minValue={0}*/}
            {/*    fieldType="long"*/}
            {/*/>*/}

            <VocabularyField
                fieldPath={`${fieldPath}.metadata.system.box_type`}
                vocabularyName="box_type"
            />

            {/*<ArrayField*/}
            {/*    fieldPath={`${fieldPath}.metadata.system.box_dimensions`}*/}
            {/*    minItems={3}*/}
            {/*    maxItems={6}*/}
            {/*>*/}
            {/*    <NumberField*/}
            {/*        fieldPath=""*/}
            {/*        minExclusive={true}*/}
            {/*        minValue={0}*/}
            {/*    />*/}
            {/*</ArrayField>*/}
        </React.Fragment>
    );
};
// TODO includesPaths might be important, but that's for later
