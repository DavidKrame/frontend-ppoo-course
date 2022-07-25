import React, { useEffect, useState } from "react";
import {
  ContentTable,
  ColumnsTable,
  Table,
  WidgetLgTrRows,
  WidgetTd
} from "../widgets/TableCustom";
import Button from "../widgets/Button";
import Grid from "@material-ui/core/Grid"
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../widgets/CircularProgress";
import { getAllCommands } from "../../store/actions/command.action";
import { getAllClients } from "../../store/actions/user.action";
import { ShowNameClients } from "./TableProducts";
import {URL_API} from "../../components/utils/FetchData";

const TableCommands = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { allCommands } = useSelector((state: any) => state.commands);
  const { allClients } = useSelector((state: any) => state.users);

  useEffect(() => {
    if (allCommands.commands.length === 0) dispatch(getAllCommands());
    if (allClients.clients.length === 0) dispatch(getAllClients());
  }, []);

  const columns: string[] = [
    "NUM",
    "ID CLIENTS",
    "MONTANTS",
    "STATUTS",
    "DATE DE COMM.",
    "TEMPS"
  ];

  const [commandesList, setCommandesList] = useState<any>([])
  const [flagLoad, setFlagLoad] = useState(false)
 
  useEffect(() => {
    setFlagLoad(false)
    let url = "command/"
    let good = []
    fetch(`${URL_API}/api/${url}`)
      .then((res) => res.json())
      .then((jsons) => {
        good = jsons["data"]["commands"];
        setCommandesList(good)
        // console.log(commandesList)
        setFlagLoad(true)
      });
  }, []);
  
  return (
    <div className='maiTabProducts'>      
      <div className='content-actionsHeader-category'>
        <Button actionTo={()=>(window.location.reload())} styleBtn={"btnPrimary"} textBtn={"Actualiser"} />
      </div>

      
        <ContentTable>
        <Table>
          <ColumnsTable columns={columns} />
          {commandesList.map((commandesList2 : any ,key : number)=>{
                return ( <WidgetLgTrRows   key={key}>
                    <WidgetTd>{key+1}</WidgetTd>
                    <WidgetTd>
                      {commandesList2?.user_id}
                    </WidgetTd>
                    <WidgetTd>{commandesList2?.amount}</WidgetTd>
                    <WidgetTd>{(commandesList2?.status)==="1"?"UNPAID":"PAID"}</WidgetTd>
                    <WidgetTd>
                      {new Date(commandesList2?.created).toLocaleDateString()}
                    </WidgetTd>
                    <WidgetTd>
                      {new Date(commandesList2?.created).getHours()+"h : "+new Date(commandesList2?.created).getMinutes()+"min"}
                    </WidgetTd>
                  </WidgetLgTrRows>);})}
        </Table>
        {!flagLoad && <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <div>  <br /> <br /> <br /> <br />  </div> </Grid> }

        {!flagLoad && <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <Loader /> </Grid> }
      </ContentTable>
    </div>);
}
export default TableCommands;