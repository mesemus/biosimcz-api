import React from "react";
import {TextField as InvenioTextField} from "react-invenio-forms";
import {useFieldData} from "@js/oarepo_ui/forms";
import {getIn, useFormikContext} from "formik";
import {
    useFormConfig,
//  FormikStateLogger,
    CreatibutorsField,
    TextField,
} from "@js/oarepo_ui/forms";

export const XYZ = ({
                        fieldPath,
                        fieldRepresentation = "full",
                        icon = "arrow up",
                        ...rest
                    }) => {
    const {setFieldTouched, setFieldValue, values} = useFormikContext();
    const {getFieldData} = useFieldData();

    return (
        <div class="ui grid">
            <TextField class="three wide column" optimized fieldRepresentation="compact" type="number" label="X"
                       fieldPath={`${fieldPath}.0`} {...getFieldData({
                "fieldPath": `${fieldPath}.0`,
                fieldRepresentation,
                icon
            })} {...rest} />
            <TextField class="three wide column" optimized fieldRepresentation="compact" type="number" label="X"
                       fieldPath={`${fieldPath}.1`} {...getFieldData({
                "fieldPath": `${fieldPath}.1`,
                fieldRepresentation,
                icon
            })} {...rest} />
            <TextField class="three wide column" optimized fieldRepresentation="compact" type="number" label="X"
                       fieldPath={`${fieldPath}.2`} {...getFieldData({
                "fieldPath": `${fieldPath}.2`,
                fieldRepresentation,
                icon
            })} {...rest} />
        </div>
    );
};


export default XYZ;
