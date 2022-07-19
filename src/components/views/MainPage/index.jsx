import React, {useState} from "react";
import styled from "styled-components";
import BaseTepl from "../../templates/BaseTepl";
import Title from "../../organisms/Title";
import IntroPage from "../IntroPage";
import RentalItem from "../RentalItem";
import RentalPlace from "../RentalPlace";

function MainPage() {
    const [page, setPage] = useState(0);

    return (
        <BaseTepl changePage={setPage}>

            {page === 0 && <IntroPage />}
            {page === 1 && <RentalItem />}
            {page === 2 && <RentalPlace />}
        </BaseTepl>
    );
}

export default MainPage;