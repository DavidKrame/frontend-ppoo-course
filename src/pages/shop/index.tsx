import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Categories from "../../components/widgets/Categorie";
import { SubheaderCategories } from "../../components/widgets/RelatedPost";
import CardShop from "../../components/shop/CardShop";
import { ContentScrollable } from "../../components/shared/ComponentSrolling";
import { getAllProducts } from "../../store/actions/product.action";
import { getCategories } from "../../store/actions/category.action";
import { Loader } from "../../components/widgets/CircularProgress";
import AlertComponent from "../../components/shared/AlertComponent";

function HomeShop() {
  const dispatch = useDispatch();
  const { allProducts } = useSelector((state: any) => state.products);
  const { allCategories } = useSelector((state: any) => state.categories);
  const [random, setRandom] = useState(0);

  useEffect(() => {
    if (allProducts.products.length === 0) dispatch(getAllProducts());
    if (allCategories.categories.length === 0) dispatch(getCategories());
  }, [random]);

  const reload = () => {
    setRandom(Math.random());
  };

  return (
    <div>
      <div className='margin-2 '>

        <Grid container alignItems="center" justifyContent="center" spacing={10}> <SubheaderCategories /> </Grid>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={12} xl={12}>
            <ContentScrollable height={540} hideBgColor={false}>
              <div  className='margin-top-2  margin-bottom-2 '>
                <Categories category={allProducts.currentCategory} />
              </div>
              <div>
              {!allProducts.isLoadingInfo ? (<Grid container alignItems="center" justifyContent="center" spacing={5}>
                  
                    {allProducts.products.map((item: any, key: number) => (
                      <Grid item xs={6} sm={4} md={4} xl={4} key={key}>
                        <div className='margin-bottom-2 '>
                          <CardShop item={item} index={key} />
                        </div>
                      </Grid>
                    ))}
                </Grid>) : 
                (<div>
                  <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <div>  <br /> <br /> <br /> <br />  </div> </Grid>
                  <Grid container direction="column-reverse" alignItems="center" justifyContent="center" spacing={5}> <Loader /> </Grid>
                </div>)}
              </div>

              {!allProducts.isLoadingInfo && allProducts.products.length === 0 && (
                <div>
                  <AlertComponent
                    message={
                      "Nous n'avons pas retrouvé de données pour cette catégories"
                    }
                    fnAction={reload}
                  />
                </div>
              )}
            </ContentScrollable>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default HomeShop;
