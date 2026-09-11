import { UppyUploader, FileUploader } from "@js/invenio_rdm_records";
import { SuggestionsButton } from "./Button";
import React from 'react';
import Overridable from "react-overridable";

// File uploader to overwrite the default one
export const OrchaFileUploader = (props) => {
const config = props.config || {};
const { record, files, record, permissions, useUppy } = props;
  
  // const orchaEnabled = config?.orchaEnabled ?? props?.orchaEnabled ?? true;
  // FIXME also overwritten
  const orchaEnabled = true;

  const UploaderField = FileUploader;

  const fileActions =
    !record.is_published && orchaEnabled
      ? (file) => {
          const filename = file?.name?.toLowerCase() ?? "";
          console.log(filename)
          debugger;
          if (file?.mimetype !== "application/pdf" || !filename.endsWith(".pdf"))
            return null;

          return (
            <Overridable
              id="InvenioAppRdm.Deposit.SuggestionsButton.container"
              record={record}
              file={file}
            >
              <SuggestionsButton record={record} file={file} inline />
            </Overridable>
          );
        }
      : undefined;

  return (
    <UploaderField
      {...props}
      fileActions={fileActions}
    />
  );
};
