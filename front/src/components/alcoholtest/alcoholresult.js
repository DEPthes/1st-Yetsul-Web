import React from "react";
import styled from "@emotion/styled";

const DivStyle = styled.div`
	background-color: hotpink;
`;

function Alcoholresult() {
	return (
		<main>
			<div>
				<img src="ham.jpg" alt="" />
			</div>
			<DivStyle>별 헤는 밤에 갇힌 김홍도</DivStyle>
			<div>
				담백한 당신은 어지럽고 신비한 세계에 갇혀버렸습니다. 깔끔하고
				담백한 맛을 좋아하며 새로운 시도를 해오는 술을 좋아하네요!
			</div>
			<div>
				<div>
					<img src="ham.jpg" alt="" />
				</div>

				<div>맛없어</div>
			</div>
		</main>
	);
}

export default Alcoholresult;
