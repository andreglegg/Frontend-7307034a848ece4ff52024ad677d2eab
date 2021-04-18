import React from 'react';
import Pagination from 'reactstrap/lib/Pagination';
import PaginationItem from 'reactstrap/lib/PaginationItem';
import PaginationLink from 'reactstrap/lib/PaginationLink';

const Paginate = (props) => {
		const { page, limit, totalProducts } = props.paginationMeta;
		const nextPage = parseInt(page) + 1;
		const prevPage = parseInt(page) - 1;

		return(
						<Pagination size="sm" aria-label="Page navigation example">
								<PaginationItem disabled={(page <= 1)}>
										<PaginationLink previous href={`/?page=${prevPage}&limit=${limit}`}>
											Previous
										</PaginationLink>
								</PaginationItem>
								<PaginationItem disabled={page >= (totalProducts/limit)}>
										<PaginationLink next href={`/?page=${nextPage}&limit=${limit}`}>
											Next
										</PaginationLink>
								</PaginationItem>
						</Pagination>

		)
}

export default Paginate;
