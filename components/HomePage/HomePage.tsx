import { Container, Grid } from "@material-ui/core";
import React from "react";
import CommonPostCard from "../cards/CommonPostCard";
import CompanyHeading from "../CompanyHeading/CompanyHeading";
import NewsFeed from "../NewsFeed/NewsFeed";
import Stories from "../Stories/Stories";

function HomePage({ onMenuButtonClick }: { onMenuButtonClick: () => void}) {
    return <><Container>
            <CompanyHeading />
            <Stories />          
        </Container>
        <NewsFeed />
        </>
        
}

export default HomePage;