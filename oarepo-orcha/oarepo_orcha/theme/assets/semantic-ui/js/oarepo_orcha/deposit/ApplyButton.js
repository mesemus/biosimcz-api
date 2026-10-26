import React from "react";
import PropTypes from "prop-types";
import { connect as connectFormik } from "formik";
import { Button, Message } from "semantic-ui-react";
import { useSuggestions } from "./Context";
import { i18next } from "@translations/invenio_app_rdm/i18next";

const getResultsMetadata = (suggestions) => {
  const metadata = suggestions?.getResults()?.metadata;
  return metadata && typeof metadata === "object" ? metadata : {};
};
// Vocabulary fields store {id: ...} in formik; the workflow returns plain
// strings. Maps a result key to its vocabulary name.
const VOCABULARY_FIELDS = {
  "simulation_setup.software": "software",
  "simulation_setup.force_field": "force_field",
  "simulation_setup.water_model": "water_model",
  "simulation_setup.integrator": "integrator",
  "thermodynamic_state.ensemble": "ensemble",
  "thermodynamic_state.thermostat": "thermostat",
  "thermodynamic_state.barostat": "barostat",
  "system.box_type": "box_type",
};

// Resolve the best matching vocabulary id for a suggestion, or null on miss/error.
const resolveVocabularyId = (vocabularyName, id) =>
  fetch(
    `/api/vocabularies/${vocabularyName}?q=${encodeURIComponent(id)}`
  )
    .then((res) => (res.ok ? res.json() : { hits: { hits: [] } }))
    .then(
      (data) => data.hits.hits[0] ?? null,
      () => null
    );

export const SuggestionsApplyButtonComponent = ({ formik }) => {
  const suggestions = useSuggestions();

  if (!suggestions) return null;
  if (!formik) return null;

  const { status, error, dismissError } = suggestions;
  const metadata = getResultsMetadata(suggestions);
  const applicable = Object.entries(metadata).filter(
    ([, value]) => value !== null && value !== undefined
  );
  const hasMetadata = applicable.length > 0;

  const handleApply = async () => {
    await Promise.all(
      applicable.map(async ([key, value]) => {
        const vocabularyName = VOCABULARY_FIELDS[key];
        if (vocabularyName) {
          const resolvedEntry = await resolveVocabularyId(vocabularyName, value);
          if (!resolvedEntry) return;
          formik.setFieldValue(`metadata.metadata.${key}`, {
            id: resolvedEntry.id,
            title: resolvedEntry.title,
          });
        } else {
          formik.setFieldValue(`metadata.metadata.${key}`, value);
        }
      })
    );
  };

  return (
    <div className="orcha-apply-button">
      <Button
        type="button"
        primary
        compact
        size="mini"
        disabled={!hasMetadata}
        icon="check"
        content={i18next.t("Apply extracted metadata")}
        onClick={handleApply}
      />
      {status === "success" && hasMetadata && (
        <span className="orcha-apply-count ml-5">
          {i18next.t("{{count}} fields ready to apply", {
            count: applicable.length,
          })}
        </span>
      )}
      {error && (
        <Message negative size="mini" className="mt-5" onDismiss={dismissError}>
          {error}
        </Message>
      )}
    </div>
  );
};

export const SuggestionsApplyButton = connectFormik(SuggestionsApplyButtonComponent);
