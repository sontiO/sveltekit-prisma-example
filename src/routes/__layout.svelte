<script>
	import '../app.css';
</script>

<nav class="bg-zinc-200  absolute top-0 w-full">
	<div class="max-w-7xl mx-4">
		<div class="flex justify-between h-12">
			<div class="flex px-2 lg:px-0">
				<div class="hidden lg:ml-6 lg:flex lg:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					<a
						href="/"
						class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
					>
						Home
					</a>
					<a
						href="/users"
						class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
					>
						Users
					</a>
					<a
						href="/todos"
						class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
					>
						Todos
					</a>
					<a
						href="/about"
						class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
					>
						About
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>

<slot />
