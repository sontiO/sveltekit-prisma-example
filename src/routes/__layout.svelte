<script>
	import '../app.css';
	import { page } from '$app/stores';
	import Transition from '$root/components/Transition.svelte';
	console.log('tryna learn here', $page.url);
</script>

<nav class="absolute top-0 w-full bg-zinc-200">
	<div class="mx-4 max-w-7xl">
		<div class="flex justify-between h-12">
			<div class="flex px-2 lg:px-0">
				<div class="flex lg:ml-6 lg:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					<a
						href="/"
						class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 border-b-2 "
					>
						Home
					</a>
					<a
						href="/users"
						class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
					>
						Users
					</a>
					<a
						href="/todos"
						class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
					>
						Todos
					</a>
					<a
						href="/about"
						class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 border-b-2 border-transparent hover:border-gray-300 hover:text-gray-700"
					>
						About
					</a>
				</div>
			</div>
		</div>
	</div>
</nav>
<main>
	<slot />
</main>
