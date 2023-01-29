import styled from "@emotion/styled";

export const Item = styled.li`
width: 300px;
border: 2px solid gray;
border-radius: 4px;
display: flex;
align-items: center;
background-color: white;
padding: 20px;

	&:not(:last-child){
	margin-bottom: 10px;
	}
`;

export const Status = styled.span`
display: block;
margin-right: 10px;
width: 20px;
height: 20px;
background-color: ${(props) => {
	console.log(props);
	if (props.children === true) {
		return props.type = 'green';
	} else {
		return props.type = 'red';
	}
	
}};
border-radius: 50%;
`;

export const AvatorPic = styled.img`
	display: block;
	border: 1px solid gray;
	border-radius: 4px;
	margin-right: 20px;
	height: 50px;

`;

export const Name = styled.p`
font-size: 17px;
font-weight: 600;

`