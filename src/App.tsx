import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import { billList } from "./billList";

export const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={billList} />
  </Admin>
);
