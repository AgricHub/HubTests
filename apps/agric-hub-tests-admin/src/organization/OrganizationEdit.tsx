import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const OrganizationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Location" source="location" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
