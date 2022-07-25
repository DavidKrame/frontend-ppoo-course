import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../widgets/CircularProgress";
import { SubstringTextComp } from "../../services/functions";
import { getCategories } from "../../store/actions/category.action";
import { useHistory } from "react-router-dom";

export const TableCategories = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { allCategories } = useSelector((state: any) => state.categories);

  useEffect(() => {
    if (allCategories.categories.length === 0) dispatch(getCategories());
  }, []);

  const columns: string[] = [
    "NUM",
    "ID",
    "LIBELLE",
    "DESCRIPTION",
    "DATE ENREGIST."
  ];

  return (
    <div className='maiTabClients'>
      <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {!allCategories.isLoadingInfo &&
            allCategories?.categories?.map((item: any, key: number) => (
              <WidgetLgTrRows key={key}>
                <WidgetTd>{key + 1}</WidgetTd>
                <WidgetTd>{item.id}</WidgetTd>
                <WidgetTd>{`${item.libelle}`}</WidgetTd>
                <WidgetTd>{SubstringTextComp(item.description, 20)} </WidgetTd>
                <WidgetTd>
                  {new Date(item.created).toLocaleDateString()}
                </WidgetTd>
              </WidgetLgTrRows>
            ))}
        </Table>
        {allCategories.isLoadingInfo && <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <div>  <br /> <br /> <br /> <br />  </div> </Grid> }
        {allCategories.isLoadingInfo && <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <Loader /> </Grid> }
      </ContentTable>
      <div className='content-actions'>
        <div>
          <Button
            styleBtn={"btnPrimaryGradient"}
            textBtn={"Ajouter"}
            actionTo={() => history.push("/category/create")}
          />
        </div>
      </div>
    </div>
  );
};
