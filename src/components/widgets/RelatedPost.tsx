import React from "react";
import List from "@material-ui/core/List";
import Chip from "@material-ui/core/Chip";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import user from "../../assets/img/user.png";
//import Divider from "@material-ui/core/Divider";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getProductsByCategory
} from "../../store/actions/product.action";

const data = [
  {
    user: "Jules DELEUZE ",
    fText:
      " A good thing ",
    lText: "Ruby and Rails"
  },
  {
    user: "Jules DELEUZE",
    fText:
      " A good thing ",
    lText: " A good thing if you want it "
  },
  {
    user: "Daniel KAD",
    fText:
      " A good thing ",
    lText: "Javascript "
  },
  {
    user: "Jio JOO",
    fText:
      " A good thing",
    lText: "React js"
  },

  {
    user: "Dav KRM ",
    fText:
      " A good thing. Sure !",
    lText: "Python"
  }
];

const fText = (text: string) => (
  <React.Fragment>
    <div className='fText-ListItem'>{text}</div>
  </React.Fragment>
);

const lText = (text: string) => (
  <React.Fragment>
    <div className='lText-ListItem'>{text}</div>
  </React.Fragment>
);

export default function RelatedPost() {
  return (
    <List className={` containerRelatedPost`}>
      <h2> Related Posts</h2>
      {data.map((item: any) => (
        <>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt='User' src={user} />
            </ListItemAvatar>
            <ListItemText
              primary={fText(item.user)}
              secondary={lText(item.fText)}
            />
          </ListItem>
        </>
      ))}

      {/* <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Work" secondary="Jan 7, 2014" />
      </ListItem> */}
    </List>
  );
}

export function SubheaderCategories() {
  const dispatch = useDispatch();
  const { allCategories } = useSelector((state: any) => state.categories);

  return (
    <div>
      <div>
        <Chip onClick={() => dispatch(getAllProducts())} label="TOUTES LES CATEGORIES"></Chip>
        <span>  </span>
        {allCategories?.categories?.map((item: any) => (
        <span key={`${item.id}-${item.libelle}`}><Chip onClick={() => dispatch(getProductsByCategory(item.id))} label={item.libelle} ></Chip><span>  </span></span>
      ))}
    </div>
    </div>
  );
}
