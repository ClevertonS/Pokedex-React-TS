import React from "react";
import { PaginationBox, PaginationButton } from "./style";
import { CaretLeft, CaretRight } from "phosphor-react";
import { colors } from "../../Styles/colors";

interface IPageButton {
	nextPage: () => void
	changeToPreviousPage: () => void
	previousPage: string | null
}

export function PageButton(props: IPageButton){

	return (
		<PaginationBox>
			<PaginationButton onClick={props.changeToPreviousPage} disabled={props.previousPage === null ? true : false} > 
				<CaretLeft fill="regular" size={32} color={colors.surfaceColor}/>
			</PaginationButton>
			<PaginationButton onClick={props.nextPage} > 
				<CaretRight fill="regular" size={32} color={colors.surfaceColor}/>
			</PaginationButton>
		</PaginationBox>
	);
}