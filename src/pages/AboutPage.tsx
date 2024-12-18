import React from "react";

export function AboutPage() {
	return (
		<div className="w-full h-full p-10 backdrop-blur-3xl bg-blue-100 bg-opacity-20 ">
			<div className="flex flex-col bg-black bg-opacity-20 text-gray-200 drop-shadow-md rounded-lg p-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl border border-blue-600  hover:bg-opacity-50 hover:border-blue-500 hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500 cursor-pointer transition-colors wrap-card relative">
				<span className="absolute flex h-3 w-3 -top-1 -right-1">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
					<span className="relative inline-flex rounded-full h-3 w-8 bg-green-500"></span>
				</span>
				<h2 className="text-2xl sm:text-3xl font-bold  mb-4">
					Заголовок второй странички
				</h2>
				<p className="mb-4">
					Это пример текстового содержимого, оформленного с помощью Tailwind
					CSS.
				</p>
			</div>
		</div>
	);
}
