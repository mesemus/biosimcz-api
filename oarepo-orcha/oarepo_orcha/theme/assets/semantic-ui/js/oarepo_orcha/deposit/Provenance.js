import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Button, Message } from "semantic-ui-react";
import { useSuggestions } from "./Context";
import { i18next } from "@translations/invenio_app_rdm/i18next";

const getDraftId = (record) => {
  const id = record?.id;
  return id && id !== "null" && id !== "undefined" ? id : null;
};

export const SuggestionProvenanceComponent = ({ record, currentRecord, fileKey=null }) => {
  const suggestions = useSuggestions();

  if (!suggestions) return null;

  const { isLoading, status, error, suggestionsCount, trigger, dismissError } =
    suggestions;
  const draftRecord = getDraftId(currentRecord) ? currentRecord : record;
  const draftId = getDraftId(draftRecord);
  const showError = error;
  const showSuggestionsCount = status === "success";
  const result = suggestions.getResults();

  return (
    <div>
      {showSuggestionsCount && (<details>
        <summary>Provenance</summary>

        <code>
          <pre>
            {result?.provenance?.logging?.join('\n')}
          </pre>
        </code>

        <details>
          <summary>Raw results</summary>

          <code>
            <pre>
              {result?.provenance?.raw && JSON.stringify(result?.provenance?.raw)}
            </pre>
          </code>
        </details>
      </details>)}
    </div>
  );
};

SuggestionProvenanceComponent.propTypes = {
  record: PropTypes.object.isRequired,
  currentRecord: PropTypes.object,
};

SuggestionProvenanceComponent.defaultProps = {
  currentRecord: null,
};

const mapStateToProps = (state) => ({
  currentRecord: state.deposit?.record,
});

export const SuggestionProvenance = connect(mapStateToProps)(SuggestionProvenanceComponent);
