import React from "react";
import PageTemplate from '../features/pageTemplate/PageTemplate';
import Search from '../features/products/Search';

const HomePage = (props) => {

		return(
						<PageTemplate>
								<Search {...props}/>
						</PageTemplate>
		)
}

export default HomePage;
