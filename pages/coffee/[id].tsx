import { Grid, makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import SelectedCoffeeDetails from "../../components/SelectedCoffeeDetails/SelectedCoffeeDetails";
import Layout from "../../components/layouts/layout"
import LayoutWithPartition from "../../components/layouts/layoutwithpartition";

function CoffeeDetailsPage() {
    const router = useRouter();
    const { id } = router.query
    return <SelectedCoffeeDetails id={id as string}/>
}


CoffeeDetailsPage.getLayout = LayoutWithPartition;
export default CoffeeDetailsPage;

