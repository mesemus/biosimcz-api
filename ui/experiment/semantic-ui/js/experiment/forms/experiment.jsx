import React from "react";
import { TextField } from "@js/oarepo_ui/forms";
import { VocabularyField } from "@js/oarepo_vocabularies";
import { AccordionField } from "react-invenio-forms";
import { i18next } from "@translations/oarepo_rdm";


export const ExperimentMetadata = {
  key: "experiment-metadata",
  label: i18next.t("Experiment metadata"),
  component: () => {
    return (
      <>
        <AccordionField
          includesPaths={["metadata.metadata.simulation_setup"]}
          active
          label={i18next.t("Simulation Setup")}
        >
          <VocabularyField
            fieldPath={`metadata.metadata.simulation_setup.software`}
            vocabularyName="software"
          />
          <TextField fieldPath={`metadata.metadata.simulation_setup.software_version`} />
          <VocabularyField
            fieldPath={`metadata.metadata.simulation_setup.force_field`}
            vocabularyName="force_field"
          />
          <VocabularyField
            fieldPath={`metadata.metadata.simulation_setup.water_model`}
            vocabularyName="water_model"
          />
          <VocabularyField
            fieldPath={`metadata.metadata.simulation_setup.integrator`}
            vocabularyName="integrator"
          />
        </AccordionField>

        <AccordionField
          includesPaths={["metadata.metadata.thermodynamic_state"]}
          active
          label={i18next.t("Thermodynamic State")}
        >
          <VocabularyField
            fieldPath={`metadata.metadata.thermodynamic_state.ensemble`}
            vocabularyName="ensemble"
          />
          <TextField
            fieldPath={`metadata.metadata.thermodynamic_state.reference_temperature`}
            type="number"
            min={0}
          />
          <TextField
            fieldPath={`metadata.metadata.thermodynamic_state.reference_pressure`}
            type="number"
            min={0}
          />
          <VocabularyField
            fieldPath={`metadata.metadata.thermodynamic_state.thermostat`}
            vocabularyName="thermostat"
          />
          <VocabularyField
            fieldPath={`metadata.metadata.thermodynamic_state.barostat`}
            vocabularyName="barostat"
          />
        </AccordionField>

        <AccordionField
          includesPaths={["metadata.metadata.temporal_extent"]}
          active
          label={i18next.t("Temporal Extent")}
        >
          <TextField
            fieldPath={`metadata.metadata.temporal_extent.simulation_length`}
            type="number"
            min={0}
          />
          <TextField
            fieldPath={`metadata.metadata.temporal_extent.timestep`}
            type="number"
            min={0}
          />
          <TextField
            fieldPath={`metadata.metadata.temporal_extent.number_of_steps`}
            type="number"
            min={0}
          />
        </AccordionField>

        <AccordionField
          includesPaths={["metadata.metadata.system"]}
          active
          label={i18next.t("System")}
        >
          <TextField
            fieldPath={`metadata.metadata.system.total_atoms`}
            type="number"
            min={0}
          />
          <VocabularyField
            fieldPath={`metadata.metadata.system.box_type`}
            vocabularyName="box_type"
          />
        </AccordionField>
      </>
    );
  },
  includesPaths: [
    "metadata.metadata.simulation_setup",
    "metadata.metadata.thermodynamic_state",
    "metadata.metadata.temporal_extent",
    "metadata.metadata.system",
  ],
};
