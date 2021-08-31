import { Grid, makeStyles } from "@material-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import React from "react";
import SelectedCoffeeDetails from "../../components/SelectedCoffeeDetails/SelectedCoffeeDetails";
import Layout from "../../components/layouts/layout"
import LayoutWithPartition from "../../components/layouts/layoutwithpartition";
import SelectedLocation from "../../components/SelectedLocation/SelectedLocation";

function SelectedLocationPage() {
    const router = useRouter();
    const { id } = router.query
    return <SelectedLocation id={id as string}/>
}


SelectedLocationPage.getLayout = LayoutWithPartition;
export default SelectedLocationPage;


