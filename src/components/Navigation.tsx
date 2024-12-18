import React from "react";
import {Link} from "react-router-dom";

export function Navigation() {
	return (
		<nav className="h-[50px] flex sticky z-10 top-0 justify-between px-5 backdrop-blur-2xl items-center text-white bg-gray-400 bg-opacity-10 ">
			<span className="font-bold text-2xl">
				<Link
					to="/"
					className="mr-2">
					ezTripper
				</Link>
			</span>
			<span className="text-2xl">
				<Link to="/about">Обо мне</Link>
			</span>
		</nav>
	);
}
