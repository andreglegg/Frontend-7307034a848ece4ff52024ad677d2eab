import React from "react";
import PageTemplate from '../features/pageTemplate/PageTemplate';
import SearchPage from '../features/products/SearchPage';

const HomePage = (props) => {

		return(
						<PageTemplate>
								<SearchPage {...props}/>
						</PageTemplate>
		)
}

export default HomePage;
