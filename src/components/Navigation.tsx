import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
	return (
		<nav className="h-[50px] flex justify-between px-5 bacdrop-filter backdrop-brightness-15  backdrop-blur-3xl items-center text-white bg-gray-800 bg-opacity-30 ">
			<span className="font-bold">
				<Link
					to="/"
					className="mr-2">
					ezTripper
				</Link>
			</span>
			<span>
				<Link to="/about">Обо мне</Link>
			</span>
		</nav>
	);
}
