import {
  ArrayField,
  ChipField,
  Datagrid,
  List,
  NumberField,
  SingleFieldList,
  TextField,
} from "react-admin";

export const billList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ArrayField source="orders">
        <SingleFieldList>
          <ChipField source="item.id" />
        </SingleFieldList>
      </ArrayField>
      <NumberField source="pickUpCode" />
      <TextField source="status" />
      <TextField source="tableLabel" />
      <NumberField source="offset" />
      <NumberField source="createdAt" />
      <NumberField source="total" />
    </Datagrid>
  </List>
);
