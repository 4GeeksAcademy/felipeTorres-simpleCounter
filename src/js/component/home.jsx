import React from "react";

//include images into your bundle
import Counter from "./Counter";


//create your first component
const Home = () => {
	return (

		<div className="text-center">
			<div className="Counter">
				<Counter/>
			</div>
		</div>
	);
};

export default Home;
