import React, { useState } from "react";
import { PaginationBox, PaginationButton } from "./style";
import { CaretLeft, CaretRight } from "phosphor-react";
import { colors } from "../../Styles/colors";

interface IPageButton {
	nextPage: () => void
	changeToPreviousPage: () => void
	previousPage: string
}

export function PageButton(props: IPageButton){

	return (
		<PaginationBox>
			<PaginationButton onClick={props.changeToPreviousPage} disabled={props.previousPage === null ? true : false} > 
				<CaretLeft fill="regular" size={32} color={colors.primaryColorFont}/>
			</PaginationButton>
			<PaginationButton onClick={props.nextPage} > 
				<CaretRight fill="regular" size={32} color={colors.primaryColorFont}/>
			</PaginationButton>
		</PaginationBox>
	);
}