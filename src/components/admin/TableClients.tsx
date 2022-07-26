import React, { useEffect } from "react";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd,
  ScrollbarHor
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { getAllClients } from "../../store/actions/user.action";
import { Loader } from "../widgets/CircularProgress";

export const TableClients = () => {
  const dispatch = useDispatch();
  const { allClients } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (allClients.clients.length === 0) dispatch(getAllClients());
  }, []);
  const columns: string[] = ["NUM", "NOMS", "EMAIL", "PHONE", "DATE ENREGIST."];

  return (
    <div className='maiTabClients'>
      <ScrollbarHor minWidth={"800px"}>
        <ContentTable>
          <Table>
            <ColumnsTable columns={columns} />
            {!allClients.isLoadingInfo &&
              allClients?.clients?.map((item: any, key: number) => (
                <WidgetLgTrRows key={key}>
                  <WidgetTd>{key + 1}</WidgetTd>{" "}
                  <WidgetTd>{`${item.name} ${item.lastname}`}</WidgetTd>
                  <WidgetTd>{item.email}</WidgetTd>
                  <WidgetTd>{item.phone}</WidgetTd>
                  <WidgetTd>
                    {new Date(item.created).toLocaleDateString()}
                  </WidgetTd>
                </WidgetLgTrRows>
              ))}
          </Table>
          {allClients.isLoadingInfo && <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <div>  <br /> <br /> <br /> <br />  </div> </Grid> }
        {allClients.isLoadingInfo && <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <Loader /> </Grid> }
        </ContentTable>
      </ScrollbarHor>

      <div className='content-actions'>
        <div>
          <Button styleBtn={"btnPrimaryGradient"} textBtn={"Ajouter"} />
        </div>
      </div>
    </div>
  );
};
