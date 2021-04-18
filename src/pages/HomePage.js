import React from "react";
import PageTemplate from '../features/pageTemplate/PageTemplate';
import SearchPage from '../features/Products/SearchPage';

const HomePage = (props) => {

		return(
						<PageTemplate>
								<SearchPage {...props}/>
						</PageTemplate>
		)
}

export default HomePage;
