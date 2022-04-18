<script>
	let name = '';
</script>

<form action="/users" method="post" autocomplete="off" class="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
	<div class="min-w-0 flex-1">
		<label for="cta-name" class="sr-only">Name</label>
		<input
			placeholder="Name"
			name="form-name"
			bind:value={name}
			type="text"
			class="block w-full border border-transparent rounded-md px-5 py-3 text-base
       text-gray-900 placeholder-gray-500 shadow-sm focus:outline-none focus:border-transparent 
       focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
		/>
		<button
			type="submit"
			class="block w-full mt-2 rounded-md border border-transparent px-5 py-3 bg-indigo-500 text-base font-medium text-white shadow hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 sm:px-10"
			>Submit</button
		>
	</div>
</form>
