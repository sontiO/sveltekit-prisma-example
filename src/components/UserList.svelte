<script>
	export let users;
</script>

<ul class="flex flex-col my-2 w-full text-zinc-200">
	{#each users as user}
		<li>{user.name}</li>
	{:else}
		<li>No Users yet</li>
	{/each}
</ul>
